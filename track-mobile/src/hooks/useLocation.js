import { useState, useEffect } from 'react';

import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { status } = await requestPermissionsAsync();

        if (status === 'granted') {
          subscriber = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000, // update every 1 second
              distanceInterval: 10 // update every 10 meters
            },
            callback
          );
        } else {
          throw new Error('Location permission not granted');
        }
      } catch (err) {
        setErr(err);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

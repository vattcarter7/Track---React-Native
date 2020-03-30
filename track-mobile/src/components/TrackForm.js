import React, { Fragment, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <Fragment>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter name'
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title='Stop' onPress={stopRecording} />
        ) : (
          <Button title='Start Recording' onPress={startRecording} />
        )}
      </Spacer>

      <Spacer>
        {!recording && locations.length ? (
          <Button onPress={saveTrack} title='Save Recording' />
        ) : null}
      </Spacer>
    </Fragment>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});

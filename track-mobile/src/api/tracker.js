import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  //TODO change the URL in every 8 hours for NGROK
  baseURL: 'http://e9fb5a6a.ngrok.io'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;

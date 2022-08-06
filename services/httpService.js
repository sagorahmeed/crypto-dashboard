import { useAppBridge } from '@shopify/app-bridge-react';
import { getSessionToken } from '@shopify/app-bridge-utils';
import axios from 'axios';
import config from '../config';

// console.log('baseUrl', baseUrl);
const instance = axios.create({
  baseURL: config.apiUrl,
  timeout: 15000,
});

// Add a request interceptor
instance.interceptors.request.use((setup) => {
  const app = useAppBridge();
  const token = getSessionToken(app);
  // Do something before request is sent
  console.log('Api is calling');
  return {
    ...setup,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
});

const responseBody = () => (response) => response.data.data;

const requests = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};

export default requests;

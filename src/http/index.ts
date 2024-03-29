import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API_ENDPOINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const get = <R>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> =>
  instance.get(url, config).then((response) => response as unknown as R);

export { get };

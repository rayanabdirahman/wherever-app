import axios, { AxiosInstance } from 'axios';
import { store } from '../store';
export default (token?: string | null): AxiosInstance => {
  const { token: tokenFromState } = store.getState().session;
  return axios.create({
    headers: {
      Authorization: `Bearer ${tokenFromState || token}`
    }
  });
};

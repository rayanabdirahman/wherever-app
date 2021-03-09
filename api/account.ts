import axios from 'axios';
import { SignInModel, SignUpModel } from '../domain/interfaces/account';
import { store } from '../store';

const { apiUrl } = store.getState().config;
const API_BASE_URL = `${apiUrl}/accounts`;

type AccountApi = {
  signUp(model: SignUpModel): Promise<string>;
  signIn(model: SignInModel): Promise<string>;
};

const AccountApi: AccountApi = {
  async signUp(model: SignUpModel): Promise<string> {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, model);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async signIn(model: SignInModel): Promise<string> {
    try {
      const response = await axios.post(`${API_BASE_URL}/signin`, model);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default AccountApi;

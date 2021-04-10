import axios from 'axios';
import buildClient from '../../utilities/axios-helper';
import { CreatePostModel } from '../../domain/interfaces/social';
import { store } from '../../store';

const { apiUrl } = store.getState().config;
const API_BASE_URL = `${apiUrl}/posts`;

type PostApi = {
  createOne(model: CreatePostModel): Promise<unknown>;
  likeOne(_id: string): Promise<unknown>;
  findAll(): Promise<unknown>;
};

const PostApi: PostApi = {
  async createOne(model: CreatePostModel): Promise<unknown> {
    try {
      const response = await buildClient().post(`${API_BASE_URL}`, model);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async likeOne(_id: string): Promise<unknown> {
    try {
      const response = await buildClient().put(`${API_BASE_URL}/${_id}/like`);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async findAll(): Promise<unknown> {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default PostApi;

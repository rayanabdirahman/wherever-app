import { UserModel } from './account';

export interface CreatePostModel {
  content: string;
  replyTo?: string;
}

export interface PostModel {
  // Todo: change content to caption
  _id: string;
  content: string;
  replyTo?: PostModel;
  postedBy: UserModel;
  comments?: string[];
  likes?: string[];
  createdAt: string;
}

export interface PostLikeModel {
  _id: string;
}

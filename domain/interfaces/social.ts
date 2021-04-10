import { UserModel } from './account';

export interface PostModel {
  // Todo: change content to caption
  _id: string;
  content: string;
  replyTo?: string;
  postedBy: UserModel;
  comments?: string[];
  likes?: string[];
  createdAt: string;
}

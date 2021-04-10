import { UserRolesEnum } from '../enums/account';

export type UserModel = {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  likes: string[];
  role: UserRolesEnum[];
};

export type SignUpModel = {
  name: string;
  username: string;
  email: string;
  password: string;
  role?: UserRolesEnum;
};

export type SignInModel = {
  email: string;
  password: string;
};

export type JwtPayload = {
  user: UserModel;
  iat: number;
  exp: number;
};

import { UserRolesEnum } from '../enums/account';

export type UserModel = {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: UserRolesEnum[];
};

export type SignUpModel = {
  name: string | null;
  username: string | null;
  email: string | null;
  password: string | null;
  role?: UserRolesEnum;
};

export type SignInModel = {
  email: string | null;
  password: string | null;
};

export type JwtPayload = {
  user: UserModel;
  iat: number;
  exp: number;
};

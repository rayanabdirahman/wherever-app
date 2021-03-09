import { UserRolesEnum } from '../enums/account';

export interface UserModel {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: UserRolesEnum[];
}

export interface SignUpModel {
  name: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  role?: UserRolesEnum;
}

export interface SignInModel {
  email: string | null;
  password: string | null;
}

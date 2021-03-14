import { PlatformOSType } from 'react-native';
import { PlatformEnvEnum } from '../domain/enums/config';
import { JwtPayload } from '../domain/interfaces/account';
import { AlertModel } from '../domain/interfaces/alert';

export type AlertState = AlertModel[];

export type ConfigState = {
  platformOS: PlatformOSType;
  platformENV: PlatformEnvEnum | null;
  apiUrl: string;
};

export type NavigationState = {
  isUserSignedIn: boolean;
  hasContentRendered: boolean;
  isLoading: boolean;
};

export type SessionState = {
  token: string | null;
  payload: JwtPayload;
};

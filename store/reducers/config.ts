import { AnyAction } from 'redux';
import { ConfigState } from '../interfaces';
import { PlatformEnvEnum } from '../../domain/enums/config';
import { Platform } from 'react-native';

const initialState: ConfigState = {
  platformOS: Platform.OS,
  platformENV: __DEV__
    ? PlatformEnvEnum.DEVELOPMENT
    : PlatformEnvEnum.PRODUCTION,
  apiUrl: __DEV__
    ? 'http://83fd06abc2fc.ngrok.io/api/v1'
    : 'Set Production Api Key'
};

export default (state = initialState, action: AnyAction): ConfigState => {
  switch (action.type) {
    default:
      return state;
  }
};

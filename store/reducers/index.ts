import { combineReducers } from 'redux';
import alert from './alert';
import navigation from './navigation';
import config from './config';
import account from './account';

export default combineReducers({
  config,
  navigation,
  alert,
  session: account
});

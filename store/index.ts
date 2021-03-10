import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  AlertState,
  ConfigState,
  NavigationState,
  SessionState
} from './interfaces';
import rootReducer from './reducers';

export type State = {
  config: ConfigState;
  navigation: NavigationState;
  alert: AlertState;
  session: SessionState;
};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

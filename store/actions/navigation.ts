import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { NavigationActionType } from './types';

export const setIsUserSignedIn = (isUserSignedIn: boolean) => (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): void => {
  dispatch({
    type: NavigationActionType.SET_IS_USER_SIGNED_IN,
    payload: { isUserSignedIn }
  });
};

export const setHasContentRendered = (hasContentRendered: boolean) => (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): void => {
  dispatch({
    type: NavigationActionType.HAS_RENDERED_CONTENT,
    payload: { hasContentRendered }
  });
};

export const setIsLoading = (isLoading: boolean) => (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): void => {
  dispatch({
    type: NavigationActionType.SET_IS_LOADING,
    payload: { isLoading }
  });
};

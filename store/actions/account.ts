import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { AccountActionType } from './types';
import {
  JwtPayload,
  SignInModel,
  SignUpModel
} from '../../domain/interfaces/account';
import AccountApi from '../../api/account';
import { setAlert } from './alert';
import { AlertTypeEnum } from '../../domain/enums/alert';
import { setIsLoading, setIsUserSignedIn } from './navigation';

const LOCALSTORAGE_AUTHORIZATION_TOKEN = 'Authorization-Token';

export const signUpUser = (model: SignUpModel) => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    dispatch(setIsLoading(true));

    const token: string = await AccountApi.signUp(model);

    // store user token in local storage
    await AsyncStorage.setItem(`${LOCALSTORAGE_AUTHORIZATION_TOKEN}`, token);
    dispatch({
      type: AccountActionType.SIGN_UP_SUCCESS,
      payload: { token }
    });

    // decode JWT token to get user details
    dispatch(setCurrentUser());

    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch({ type: AccountActionType.SIGN_UP_FAIL });
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
  }
};

export const signInUser = (model: SignInModel) => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    dispatch(setIsLoading(true));

    const token: string = await AccountApi.signIn(model);

    // store user token in local storage
    await AsyncStorage.setItem(`${LOCALSTORAGE_AUTHORIZATION_TOKEN}`, token);
    dispatch({
      type: AccountActionType.SIGN_IN_SUCCESS,
      payload: { token }
    });

    // decode JWT token to get user details
    dispatch(setCurrentUser());

    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch({ type: AccountActionType.SIGN_IN_FAIL });
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
  }
};

export const signOutUser = () => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    dispatch(setIsLoading(true));
    // remove user token from local storage
    await AsyncStorage.removeItem(`${LOCALSTORAGE_AUTHORIZATION_TOKEN}`);
    dispatch({ type: AccountActionType.SIGN_OUT_SUCCESS });

    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(false));

    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch({ type: AccountActionType.SIGN_OUT_FAIL });
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(true));
  }
};

export const setCurrentUser = () => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(
      `${LOCALSTORAGE_AUTHORIZATION_TOKEN}`
    );

    const jwtPayload: JwtPayload = jwt_decode(token as string);
    dispatch({
      type: AccountActionType.SET_CURRENT_USER,
      payload: { jwtPayload, token }
    });

    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(true));
  } catch (error) {
    dispatch({ type: AccountActionType.SET_CURRENT_USER_ERROR });
    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(false));
  }
};

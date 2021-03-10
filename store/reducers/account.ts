import { AnyAction } from 'redux';
import { SessionState } from '../interfaces';
import { AccountActionType } from '../actions/types';

const initialState: SessionState = {
  token: null,
  payload: null
};

export default (state = initialState, action: AnyAction): SessionState => {
  switch (action.type) {
    case AccountActionType.SET_CURRENT_USER: {
      const { jwtPayload } = action.payload;
      const { token } = action.payload;
      return { ...state, token, payload: jwtPayload };
    }
    case (AccountActionType.SIGN_UP_SUCCESS,
    AccountActionType.SIGN_IN_SUCCESS): {
      const { token } = action.payload;
      return { ...state, token };
    }
    case AccountActionType.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        token: null,
        payload: null
      };
    }
    case (AccountActionType.SET_CURRENT_USER_ERROR,
    AccountActionType.SIGN_UP_FAIL,
    AccountActionType.SIGN_IN_FAIL,
    AccountActionType.SIGN_OUT_FAIL): {
      return { ...state, token: null };
    }
    default: {
      return state;
    }
  }
};

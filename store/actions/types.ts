export enum AlertActionType {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT'
}

export enum NavigationActionType {
  SET_IS_USER_SIGNED_IN = 'SET_IS_USER_SIGNED_IN',
  HAS_RENDERED_CONTENT = 'HAS_RENDERED_CONTENT',
  SET_IS_LOADING = 'SET_IS_LOADING'
}

export enum AccountActionType {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_CURRENT_USER_ERROR = 'SET_CURRENT_USER_ERROR',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'SIGN_IN_FAIL',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = 'SIGN_OUT_FAIL'
}

export enum PostActionType {
  CREATE_POST = 'CREATE_POST',
  GET_POSTS = 'GET_POSTS',
  UPDATE_LIKES = 'UPDATE_LIKES'
}

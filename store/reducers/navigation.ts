import { AnyAction } from 'redux';
import { NavigationState } from '../interfaces';
import { NavigationActionType } from '../actions/types';

const initialState: NavigationState = {
  isUserSignedIn: false,
  hasContentRendered: false
};

export default (state = initialState, action: AnyAction): NavigationState => {
  switch (action.type) {
    case NavigationActionType.SET_IS_USER_SIGNED_IN: {
      const { isUserSignedIn } = action.payload;
      return { ...state, isUserSignedIn };
    }
    case NavigationActionType.HAS_RENDERED_CONTENT: {
      const { hasContentRendered } = action.payload;
      return { ...state, hasContentRendered };
    }
    default:
      return state;
  }
};

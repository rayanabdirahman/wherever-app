import { AnyAction } from 'redux';
import { PostState } from '../interfaces';
import { PostActionType } from '../actions/types';

const initialState: PostState = {
  posts: [],
  post: null,
  likedPost: null
};

export default (state = initialState, action: AnyAction): PostState => {
  switch (action.type) {
    case PostActionType.CREATE_POST: {
      const { post } = action.payload;
      return { ...state, post };
    }
    case PostActionType.GET_POSTS: {
      const { posts } = action.payload;
      return { ...state, posts };
    }
    case PostActionType.UPDATE_LIKES: {
      const { post } = action.payload;
      return { ...state, likedPost: post };
    }
    default: {
      return state;
    }
  }
};

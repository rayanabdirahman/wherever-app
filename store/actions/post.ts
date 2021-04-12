import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { PostActionType } from './types';
import PostApi from '../../api/post';
import { setAlert } from './alert';
import { AlertTypeEnum } from '../../domain/enums/alert';
import { CreatePostModel } from '../../domain/interfaces/social';

export const createPost = (model: CreatePostModel) => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    const posts = await PostApi.createOne(model);
    dispatch({
      type: PostActionType.GET_POSTS,
      payload: { posts }
    });
  } catch (error) {
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
  }
};

export const getPost = (_id: string) => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    const post = await PostApi.findOne(_id);
    dispatch({
      type: PostActionType.GET_POST,
      payload: { post }
    });
  } catch (error) {
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
  }
};

export const getPosts = () => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    const posts = await PostApi.findAll();
    dispatch({
      type: PostActionType.GET_POSTS,
      payload: { posts }
    });
  } catch (error) {
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
  }
};

export const updatePostLike = (_id: string) => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): Promise<void> => {
  try {
    const post = await PostApi.likeOne(_id);
    dispatch({
      type: PostActionType.UPDATE_LIKES,
      payload: post
    });
  } catch (error) {
    dispatch(
      setAlert({
        message: error,
        type: AlertTypeEnum.ERROR
      })
    );
  }
};

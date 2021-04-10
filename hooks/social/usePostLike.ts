// import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../store/actions/navigation';
import { updatePostLike } from '../../store/actions/post';
import logger from '../../utilities/logger';

export default function usePostLike(): (_id: string) => void {
  const dispatch = useDispatch();
  const updatePostLikes = (_id: string): void => {
    logger.info(`[usePostLike] - Liking post started`);
    dispatch(setIsLoading(true));
    try {
      dispatch(updatePostLike(_id));
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      logger.error(`[usePostLike] - error when liking post: ${e}`);
    }
    dispatch(setIsLoading(false));
    logger.info(`[usePostLike] - Liking post completed`);
  };

  return updatePostLikes;
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../store/actions/navigation';
import { getPost } from '../../store/actions/post';
import logger from '../../utilities/logger';

type UsePostReturnType = readonly [boolean, (_id: string) => void];

export default function usePost(): UsePostReturnType {
  const dispatch = useDispatch();
  const [isFetchingComplete, setFetchingComplete] = React.useState(false);

  async function getPostDetails(postId: string) {
    logger.info(`[usePost] - Fetching post started`);
    dispatch(setIsLoading(true));
    try {
      await dispatch(getPost(postId));
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      logger.error(`[usePost] - error when fetching post: ${e}`);
    } finally {
      setFetchingComplete(true);
    }
    dispatch(setIsLoading(false));
    logger.info(`[usePost] - Fetching post completed`);
  }

  return [isFetchingComplete, getPostDetails] as const;
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../store/actions/navigation';
import { getPosts } from '../../store/actions/post';
import logger from '../../utilities/logger';

export default function usePosts(): boolean {
  const dispatch = useDispatch();
  const [isFetchingComplete, setFetchingComplete] = React.useState(false);

  React.useEffect(() => {
    async function checkIfPostsAreAvailable() {
      logger.info(`[usePosts] - Fetching posts started`);
      dispatch(setIsLoading(true));
      try {
        await dispatch(getPosts());
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        logger.error(`[usePosts] - error when fetching posts: ${e}`);
      } finally {
        setFetchingComplete(true);
      }
      dispatch(setIsLoading(false));
      logger.info(`[usePosts] - Fetching posts completed`);
    }
    checkIfPostsAreAvailable();
  }, []);

  return isFetchingComplete;
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../store';
import { setCurrentUser } from '../store/actions/account';
import { setIsLoading } from '../store/actions/navigation';
import logger from '../utilities/logger';

export default function useAuthGuard(): boolean {
  const dispatch = useDispatch();
  const [hasUserSignedIn, setHasUserSignedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function checkIfIsAuthorised() {
      logger.info(`[useAuthGuard] - Authenticating user started`);
      dispatch(setIsLoading(true));
      try {
        await dispatch(setCurrentUser());
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        logger.error(`[useAuthGuard] - error when authenticating user: ${e}`);
      } finally {
        const { isUserSignedIn } = store.getState().navigation;
        setHasUserSignedIn(isUserSignedIn);
      }
      dispatch(setIsLoading(false));
      logger.info(`[useAuthGuard] - Authenticating user completed`);
    }
    checkIfIsAuthorised();
  }, []);

  return hasUserSignedIn;
}

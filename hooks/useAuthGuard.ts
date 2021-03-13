import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../store/actions/account';
import { setIsLoading } from '../store/actions/navigation';
import logger from '../utilities/logger';

export default function useAuthGuard(): boolean {
  const dispatch = useDispatch();
  const [isAuthCheckComplete, setAuthCheckComplete] = React.useState(false);

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
        setAuthCheckComplete(true);
      }
      dispatch(setIsLoading(false));
      logger.info(`[useAuthGuard] - Authenticating user completed`);
    }
    checkIfIsAuthorised();
  }, []);

  return isAuthCheckComplete;
}

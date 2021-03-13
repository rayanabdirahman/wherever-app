import React from 'react';
import { useDispatch } from 'react-redux';
import { SignInModel } from '../domain/interfaces/account';
import { signInUser } from '../store/actions/account';

type UseSignInHookReturnType = readonly [
  SignInModel,
  (details: SignInModel) => void
];

export default function useSignIn(): UseSignInHookReturnType {
  const dispatch = useDispatch();
  const [signInState] = React.useState<SignInModel>({
    email: '',
    password: ''
  });

  const signInUserWithDetails = (details: SignInModel): void => {
    dispatch(signInUser(details));
  };

  // Load any resources or data that we need prior to rendering the app
  // Todo: look into using redux URL variables for API calls
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.useEffect(() => {}, []);

  return [signInState, signInUserWithDetails] as const;
}

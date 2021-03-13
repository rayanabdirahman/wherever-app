import React from 'react';
import { useDispatch } from 'react-redux';
import { SignUpModel } from '../domain/interfaces/account';
import { signUpUser } from '../store/actions/account';

type UseSignUpHookReturnType = readonly [
  SignUpModel,
  (details: SignUpModel) => void
];

export default function useSignUp(): UseSignUpHookReturnType {
  const dispatch = useDispatch();
  const [signUpState] = React.useState<SignUpModel>({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const signUpUserWithDetails = (details: SignUpModel): void => {
    dispatch(signUpUser(details));
  };

  // Load any resources or data that we need prior to rendering the app
  // Todo: look into using redux URL variables for API calls
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.useEffect(() => {}, []);

  return [signUpState, signUpUserWithDetails] as const;
}

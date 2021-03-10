import React from 'react';
import { useDispatch } from 'react-redux';
import AccountApi from '../api/account';
import { AlertTypeEnum } from '../domain/enums/alert';
import { SignUpModel } from '../domain/interfaces/account';
import { setAlert } from '../store/actions/alert';
import { signUpUser } from '../store/actions/account';
import { AccountActionType } from '../store/actions/types';

type UseSignUpHookReturnType = readonly [
  SignUpModel,
  React.Dispatch<React.SetStateAction<SignUpModel>>,
  () => Promise<void>
];

export default function useSignUp(): UseSignUpHookReturnType {
  const dispatch = useDispatch();
  const [signUpState, setSignUpState] = React.useState<SignUpModel>({
    name: null,
    username: null,
    email: null,
    password: null
  });

  const signUpUserWithDetails = async () => {
    try {
      const token = await AccountApi.signUp(signUpState);
      token && dispatch(signUpUser(token));
    } catch (error) {
      dispatch({ type: AccountActionType.SIGN_UP_FAIL });
      dispatch(
        setAlert({
          message: error,
          type: AlertTypeEnum.ERROR
        })
      );
    }
  };

  // Load any resources or data that we need prior to rendering the app
  // Todo: look into using redux URL variables for API calls
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  React.useEffect(() => {}, []);

  return [signUpState, setSignUpState, signUpUserWithDetails] as const;
}

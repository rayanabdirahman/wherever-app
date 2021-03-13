export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export enum RootStackScreenName {
  ROOT = 'Root'
}

// Account screens
export type AuthStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export enum AuthStackScreenName {
  LANDING = 'Landing',
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

// Sign in screens
export type SignInStackParamList = {
  SignInEmail: undefined;
  SignInPassword: { email: string };
};

export enum SignInStackScreenName {
  SIGN_IN_EMAIL = 'SignInEmail',
  SIGN_IN_PASSWORD = 'SignInPassword'
}

// Sign up screens
export type SignUpStackParamList = {
  SignUpEmail: undefined;
  SignUpName: { email: string };
  SignUpUsername: { email: string; name: string };
  SignUpPassword: { email: string; name: string; username: string };
};

export enum SignUpStackScreenName {
  SIGN_UP_EMAIL = 'SignUpEmail',
  SIGN_UP_NAME = 'SignUpName',
  SIGN_UP_USERNAME = 'SignUpUsername',
  SIGN_UP_PASSWORD = 'SignUpPassword'
}

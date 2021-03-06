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

// Bottom tab
export type BottomTabParamList = {
  Feed: undefined;
  Stores: undefined;
  Cart: undefined;
  Account: undefined;
};

export enum BottomTabScreenName {
  FEED = 'Feed',
  STORES = 'Stores',
  CART = 'Cart',
  ACCOUNT = 'Account'
}

// Account tab screens
export type AccountStackParamList = {
  Settings: undefined;
  Addresses: undefined;
  Orders: undefined;
  Profile: undefined;
  Payments: undefined;
};

export enum AccountStackScreenName {
  SETTINGS = 'Settings',
  ADDRESSES = 'Addresses',
  ORDERS = 'Orders',
  PROFILE = 'Profile',
  PAYMENTS = 'Payments'
}

// Feed tab screens
export type FeedStackParamList = {
  Feed: undefined;
  Post: undefined;
  CreatePost: undefined;
  Comments: { postId: string };
};

export enum FeedStackScreenName {
  FEED = 'Feed',
  POST = 'Post',
  CREATE_POST = 'CreatePost',
  COMMENTS = 'Comments'
}

// Stores tab screens
export type StoresStackParamList = {
  Stores: undefined;
  Store: { storeId: string };
};

export enum StoresStackScreenName {
  STORES = 'Stores',
  STORE = 'Store'
}

// Cart tab screens
export type CartStackParamList = {
  Cart: undefined;
};

export enum CartStackScreenName {
  CART = 'Cart'
}

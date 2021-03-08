import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen, SignInScreen, SignUpScreen } from '../../screens';
import { BackButton, NavTextButton } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList, AuthStackScreenName } from '../interfaces';

const ScreenOptions = {
  title: '',
  headerShown: true,
  headerBackTitle: ' ',
  headerBackImage: () => <BackButton />,
  headerStyle: { shadowOpacity: 0, height: 150 }
};

const LandingStack = createStackNavigator<AuthStackParamList>();
const LandingNavigator = () => {
  const navigation = useNavigation();
  return (
    <LandingStack.Navigator
      screenOptions={{
        ...ScreenOptions,
        headerTransparent: true,
        headerStyle: { height: 120 },
        headerRight: () => (
          <NavTextButton
            light
            bold
            onPress={() => navigation.navigate(AuthStackScreenName.SIGN_IN)}
          >
            SIGN IN
          </NavTextButton>
        )
      }}
    >
      <LandingStack.Screen
        name={AuthStackScreenName.LANDING}
        component={LandingScreen}
      />
    </LandingStack.Navigator>
  );
};

const SignUpStack = createStackNavigator<AuthStackParamList>();
const SignUpNavigator = () => (
  <SignUpStack.Navigator screenOptions={ScreenOptions}>
    <SignUpStack.Screen
      name={AuthStackScreenName.SIGN_UP}
      component={SignUpScreen}
    />
  </SignUpStack.Navigator>
);

const SignInStack = createStackNavigator<AuthStackParamList>();
const SignInNavigator = () => (
  <SignInStack.Navigator screenOptions={ScreenOptions}>
    <SignInStack.Screen
      name={AuthStackScreenName.SIGN_IN}
      component={SignInScreen}
    />
  </SignInStack.Navigator>
);

const AuthenticationStack = createStackNavigator<AuthStackParamList>();
const AuthNavigator = (): JSX.Element => (
  <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthenticationStack.Screen
      name={AuthStackScreenName.LANDING}
      component={LandingNavigator}
    />
    <AuthenticationStack.Screen
      name={AuthStackScreenName.SIGN_UP}
      component={SignUpNavigator}
    />
    <AuthenticationStack.Screen
      name={AuthStackScreenName.SIGN_IN}
      component={SignInNavigator}
    />
  </AuthenticationStack.Navigator>
);

export default AuthNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen, SignInScreen, SignUpScreen } from '../../screens';
import { BackButton, NavTextButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

const ScreenOptions = {
  title: '',
  headerShown: true,
  headerBackTitle: ' ',
  headerBackImage: () => <BackButton />,
  headerStyle: { shadowOpacity: 0, height: 150 }
};

const LandingStack = createStackNavigator();
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
            onPress={() => navigation.navigate('SIGN_IN')}
          >
            SIGN IN
          </NavTextButton>
        )
      }}
    >
      <LandingStack.Screen name={'LANDING'} component={LandingScreen} />
    </LandingStack.Navigator>
  );
};

const SignUpStack = createStackNavigator();
const SignUpNavigator = () => (
  <SignUpStack.Navigator screenOptions={ScreenOptions}>
    <SignUpStack.Screen name={'SIGN_UP'} component={SignUpScreen} />
  </SignUpStack.Navigator>
);

const SignInStack = createStackNavigator();
const SignInNavigator = () => (
  <SignInStack.Navigator screenOptions={ScreenOptions}>
    <SignInStack.Screen name={'SIGN_IN'} component={SignInScreen} />
  </SignInStack.Navigator>
);

const AuthenticationStack = createStackNavigator();
const AuthNavigator = (): JSX.Element => (
  <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthenticationStack.Screen name={'LANDING'} component={LandingNavigator} />
    <AuthenticationStack.Screen name={'SIGN_UP'} component={SignUpNavigator} />
    <AuthenticationStack.Screen name={'SIGN_IN'} component={SignInNavigator} />
  </AuthenticationStack.Navigator>
);

export default AuthNavigator;

import React from 'react';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button,
  TextInputWithIcon
} from '../../../components';
import useSignIn from '../../../hooks/useSignIn';

const SignInScreen = (): JSX.Element => {
  const [signInState, setSignInState, signInUserWithDetails] = useSignIn();
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text large bold>
            Welcome back!
          </Text>
          <Text light>Shop the stores you love. Discover new favourites.</Text>
        </View>
        <View style={{ marginTop: 48, marginBottom: 48 }}>
          <TextInputWithIcon
            icon="mail"
            placeholder="email"
            autoFocus
            onChangeText={(email) => setSignInState({ ...signInState, email })}
          />

          <TextInputWithIcon
            icon="lock"
            placeholder="password"
            secureTextEntry
            onChangeText={(password) =>
              setSignInState({ ...signInState, password })
            }
          />
        </View>
        <Button blue onPress={() => signInUserWithDetails()}>
          Sign in
        </Button>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignInScreen;

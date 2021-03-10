import React from 'react';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button
} from '../../../components';
import { TextInput } from 'react-native-gesture-handler';
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
        <View style={{ marginTop: 50, marginBottom: 100 }}>
          <TextInput
            style={{ marginBottom: 30 }}
            placeholder="email"
            onChangeText={(email) => setSignInState({ ...signInState, email })}
          />
          <TextInput
            placeholder="password"
            onChangeText={(password) =>
              setSignInState({ ...signInState, password })
            }
          />
        </View>
        <Button onPress={() => signInUserWithDetails()}>Sign in</Button>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignInScreen;

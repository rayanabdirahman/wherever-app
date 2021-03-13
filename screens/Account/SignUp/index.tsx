import React from 'react';
import { View } from 'react-native';
import {
  Button,
  ContentContainer,
  ScreenContainer,
  Text,
  TextInputWithIcon
} from '../../../components';
import useSignUp from '../../../hooks/useSignUp';

const SignUpScreen = (): JSX.Element => {
  const [signUpState, setSignUpState, signUpUserWithDetails] = useSignUp();
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text large bold>
            Let's get started!
          </Text>
          <Text light>Fill the form to continue.</Text>
        </View>
        <View style={{ marginTop: 48, marginBottom: 48 }}>
          <TextInputWithIcon
            icon="user"
            placeholder="name"
            autoFocus
            onChangeText={(name) => setSignUpState({ ...signUpState, name })}
          />

          <TextInputWithIcon
            icon="mail"
            placeholder="email"
            onChangeText={(email) => setSignUpState({ ...signUpState, email })}
          />

          <TextInputWithIcon
            icon="user"
            placeholder="username"
            onChangeText={(username) =>
              setSignUpState({ ...signUpState, username })
            }
          />

          <TextInputWithIcon
            icon="lock"
            placeholder="password"
            secureTextEntry
            onChangeText={(password) =>
              setSignUpState({ ...signUpState, password })
            }
          />
        </View>
        <Button blue onPress={() => signUpUserWithDetails()}>
          Sign up
        </Button>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignUpScreen;

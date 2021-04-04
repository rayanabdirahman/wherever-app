import React from 'react';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button,
  KeyboardAvoidingContainer,
  TextInput
} from '../../../components';
import useSignIn from '../../../hooks/useSignIn';
import { Formik } from 'formik';
import { AccountValidator } from '../../../utilities/validation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  SignInStackParamList,
  SignInStackScreenName
} from '../../../navigation/interfaces';
import styled from 'styled-components/native';

const SignInPasswordScreen = ({
  route
}: StackScreenProps<
  SignInStackParamList,
  SignInStackScreenName.SIGN_IN_PASSWORD
>): JSX.Element => {
  const { email } = route.params;
  const [signInState, signInUserWithDetails] = useSignIn();
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text lg bold>
            Password verification
          </Text>
          <Text light>Enter your password to sign in</Text>
        </View>
        <Formik
          validationSchema={AccountValidator.password}
          initialValues={{
            ...signInState,
            email,
            password: signInState.password
          }}
          onSubmit={(values) => signInUserWithDetails(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            dirty,
            isValid
          }) => (
            <KeyboardAvoidingContainer>
              <InputContainer>
                <TextInput
                  placeholder="password"
                  autoFocus
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  error={errors.password}
                />

                <Button
                  disabled={!(isValid && dirty)}
                  onPress={() => handleSubmit()}
                >
                  Sign in
                </Button>
              </InputContainer>
            </KeyboardAvoidingContainer>
          )}
        </Formik>
      </ContentContainer>
    </ScreenContainer>
  );
};

const InputContainer = styled.View`
  margin-top: 48px;
  margin-bottom: 48px;
`;

export default SignInPasswordScreen;

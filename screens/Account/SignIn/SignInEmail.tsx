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
import { Formik } from 'formik';
import { AccountValidator } from '../../../utilities/validation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  SignInStackParamList,
  SignInStackScreenName
} from '../../../navigation/interfaces';
import styled from 'styled-components/native';

const SignInEmailScreen = ({
  navigation
}: StackScreenProps<
  SignInStackParamList,
  SignInStackScreenName.SIGN_IN_EMAIL
>): JSX.Element => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text lg bold>
            Welcome back!
          </Text>
          <Text light>Enter your email address to continue</Text>
        </View>
        <Formik
          validationSchema={AccountValidator.email}
          initialValues={{ email: '' }}
          onSubmit={(values) => {
            navigation.navigate(SignInStackScreenName.SIGN_IN_PASSWORD, {
              email: values.email
            });
          }}
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
                  placeholder="email"
                  autoFocus
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  keyboardType="email-address"
                  error={errors.email}
                />

                <Button
                  disabled={!(isValid && dirty)}
                  onPress={() => handleSubmit()}
                >
                  Continue
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

export default SignInEmailScreen;

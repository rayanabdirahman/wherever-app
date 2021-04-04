import { StackScreenProps } from '@react-navigation/stack';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  Button,
  ContentContainer,
  KeyboardAvoidingContainer,
  ScreenContainer,
  Text,
  TextInput
} from '../../../components';
import {
  SignUpStackParamList,
  SignUpStackScreenName
} from '../../../navigation/interfaces';
import { AccountValidator } from '../../../utilities/validation';

const SignUpEmailScreen = ({
  navigation
}: StackScreenProps<
  SignUpStackParamList,
  SignUpStackScreenName.SIGN_UP_EMAIL
>): JSX.Element => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text lg bold>
            Let's get started!
          </Text>
          <Text light>Enter your email address to continue</Text>
        </View>
        <Formik
          validationSchema={AccountValidator.email}
          initialValues={{ email: '' }}
          onSubmit={(values) => {
            navigation.navigate(SignUpStackScreenName.SIGN_UP_NAME, {
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

export default SignUpEmailScreen;

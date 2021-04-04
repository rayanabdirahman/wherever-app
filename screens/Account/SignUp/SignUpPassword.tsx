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
import useSignUp from '../../../hooks/useSignUp';
import {
  SignUpStackParamList,
  SignUpStackScreenName
} from '../../../navigation/interfaces';
import { AccountValidator } from '../../../utilities/validation';

const SignUpPasswordScreen = ({
  route
}: StackScreenProps<
  SignUpStackParamList,
  SignUpStackScreenName.SIGN_UP_PASSWORD
>): JSX.Element => {
  const [signUpState, signUpUserWithDetails] = useSignUp();
  const { email, name, username } = route.params;
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text lg bold>
            Create a password
          </Text>
          <Text light>Your password should be atleast 8 characters.</Text>
        </View>
        <Formik
          validationSchema={AccountValidator.password}
          initialValues={{
            ...signUpState,
            email,
            name,
            username,
            password: signUpState.password
          }}
          onSubmit={(values) => signUpUserWithDetails(values)}
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
                  Sign up
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

export default SignUpPasswordScreen;

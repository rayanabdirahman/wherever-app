import React from 'react';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button,
  TextInputWithIcon,
  KeyboardAvoidingContainer
} from '../../../components';
import { Formik } from 'formik';
import { signInEmailValidationSchema } from '../../../utilities/validation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  SignInStackParamList,
  SignInStackScreenName
} from '../../../navigation/interfaces';

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
          <Text large bold>
            Welcome back!
          </Text>
          <Text light>Enter your email address to continue</Text>
        </View>
        <Formik
          validationSchema={signInEmailValidationSchema}
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
              <View style={{ marginTop: 48, marginBottom: 48 }}>
                <TextInputWithIcon
                  icon="mail"
                  placeholder="email"
                  autoFocus
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  keyboardType="email-address"
                  error={errors.email}
                />

                <Button
                  success
                  disabled={!(isValid && dirty)}
                  onPress={() => handleSubmit()}
                >
                  Continue
                </Button>
              </View>
            </KeyboardAvoidingContainer>
          )}
        </Formik>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignInEmailScreen;

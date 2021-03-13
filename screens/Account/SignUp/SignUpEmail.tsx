import { StackScreenProps } from '@react-navigation/stack';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import {
  Button,
  ContentContainer,
  KeyboardAvoidingContainer,
  ScreenContainer,
  Text,
  TextInputWithIcon
} from '../../../components';
import {
  SignUpStackParamList,
  SignUpStackScreenName
} from '../../../navigation/interfaces';
import { signInEmailValidationSchema } from '../../../utilities/validation';

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
          <Text large bold>
            Let's get started!
          </Text>
          <Text light>Enter your email address to continue</Text>
        </View>
        <Formik
          validationSchema={signInEmailValidationSchema}
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

export default SignUpEmailScreen;

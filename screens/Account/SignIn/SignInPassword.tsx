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
import useSignIn from '../../../hooks/useSignIn';
import { Formik } from 'formik';
import { signInPasswordValidationSchema } from '../../../utilities/validation';
import { StackScreenProps } from '@react-navigation/stack';
import {
  SignInStackParamList,
  SignInStackScreenName
} from '../../../navigation/interfaces';

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
          <Text large bold>
            Password verification
          </Text>
          <Text light>Enter your email address to continue</Text>
        </View>
        <Formik
          validationSchema={signInPasswordValidationSchema}
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
              <View style={{ marginTop: 48, marginBottom: 48 }}>
                <TextInputWithIcon
                  icon="lock"
                  placeholder="password"
                  autoFocus
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  error={errors.password}
                />

                <Button
                  success
                  disabled={!(isValid && dirty)}
                  onPress={() => handleSubmit()}
                >
                  Sign in
                </Button>
              </View>
            </KeyboardAvoidingContainer>
          )}
        </Formik>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignInPasswordScreen;

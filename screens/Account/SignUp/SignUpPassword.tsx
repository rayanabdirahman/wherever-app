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
import useSignUp from '../../../hooks/useSignUp';
import {
  SignUpStackParamList,
  SignUpStackScreenName
} from '../../../navigation/interfaces';
import { signInPasswordValidationSchema } from '../../../utilities/validation';

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
          <Text large bold>
            Create a password
          </Text>
          <Text light>Your password should be atleast 8 characters.</Text>
        </View>
        <Formik
          validationSchema={signInPasswordValidationSchema}
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
                  Sign up
                </Button>
              </View>
            </KeyboardAvoidingContainer>
          )}
        </Formik>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignUpPasswordScreen;

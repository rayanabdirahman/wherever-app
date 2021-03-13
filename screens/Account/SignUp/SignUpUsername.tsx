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
import { signUpUsernameValidationSchema } from '../../../utilities/validation';

const SignUpUsernameScreen = ({
  route,
  navigation
}: StackScreenProps<
  SignUpStackParamList,
  SignUpStackScreenName.SIGN_UP_USERNAME
>): JSX.Element => {
  const { email, name } = route.params;
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text large bold>
            Create your username
          </Text>
          <Text light>Add username to continue.</Text>
        </View>
        <Formik
          validationSchema={signUpUsernameValidationSchema}
          initialValues={{ username: '' }}
          onSubmit={(values) => {
            navigation.navigate(SignUpStackScreenName.SIGN_UP_PASSWORD, {
              email,
              name,
              username: values.username
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
                  icon="user"
                  placeholder="username"
                  autoFocus
                  onBlur={handleBlur('username')}
                  onChangeText={handleChange('username')}
                  value={values.username}
                  error={errors.username}
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

export default SignUpUsernameScreen;

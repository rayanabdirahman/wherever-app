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
import { AccountValidator } from '../../../utilities/validation';

const SignUpNameScreen = ({
  route,
  navigation
}: StackScreenProps<
  SignUpStackParamList,
  SignUpStackScreenName.SIGN_UP_NAME
>): JSX.Element => {
  const { email } = route.params;
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text large bold>
            What's your name?
          </Text>
          <Text light>Add your name to continue.</Text>
        </View>
        <Formik
          validationSchema={AccountValidator.name}
          initialValues={{ name: '' }}
          onSubmit={(values) => {
            navigation.navigate(SignUpStackScreenName.SIGN_UP_USERNAME, {
              email,
              name: values.name
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
                  placeholder="name"
                  autoFocus
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  error={errors.name}
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

export default SignUpNameScreen;

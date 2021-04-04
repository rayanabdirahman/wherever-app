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
          <Text lg bold>
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
              <InputContainer>
                <TextInput
                  placeholder="name"
                  autoFocus
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  error={errors.name}
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

export default SignUpNameScreen;

import React from 'react';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button,
  TextInputWithIcon
} from '../../../components';
import useSignIn from '../../../hooks/useSignIn';
import { Formik } from 'formik';
import { signInValidationSchema } from '../../../utilities/validation';

const SignInScreen = (): JSX.Element => {
  const [signInState, signInUserWithDetails] = useSignIn();
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text large bold>
            Welcome back!
          </Text>
          <Text light>Shop the stores you love. Discover new favourites.</Text>
        </View>
        <Formik
          validationSchema={signInValidationSchema}
          initialValues={signInState}
          onSubmit={(values) => signInUserWithDetails(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid
          }) => (
            <View style={{ marginTop: 48, marginBottom: 48 }}>
              <TextInputWithIcon
                icon="mail"
                placeholder="email"
                autoFocus
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
                error={touched.email && errors.email}
              />

              <TextInputWithIcon
                icon="lock"
                placeholder="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                error={touched.password && errors.password}
              />

              <Button disabled={!isValid} blue onPress={() => handleSubmit()}>
                Sign in
              </Button>
            </View>
          )}
        </Formik>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignInScreen;

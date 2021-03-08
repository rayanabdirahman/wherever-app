import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  AuthStackParamList,
  AuthStackScreenName
} from '../../../navigation/interfaces';
import { ContentContainer, ScreenContainer, Text } from '../../../components';

const SignUpScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation
}: StackScreenProps<
  AuthStackParamList,
  AuthStackScreenName.SIGN_IN
>): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text large bold>
          Let's get started!
        </Text>
        <Text light>Fill the form to continue.</Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default SignUpScreen;

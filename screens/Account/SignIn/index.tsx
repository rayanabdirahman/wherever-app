import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  AuthStackParamList,
  AuthStackScreenName
} from '../../../navigation/interfaces';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const SignInScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation
}: StackScreenProps<
  AuthStackParamList,
  AuthStackScreenName.SIGN_IN
>): JSX.Element => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text large bold>
            Welcome back!
          </Text>
          <Text light>Shop the stores you love. Discover new favourites.</Text>
        </View>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SignInScreen;

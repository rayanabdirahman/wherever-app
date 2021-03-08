import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const SignInScreen = (): JSX.Element => {
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

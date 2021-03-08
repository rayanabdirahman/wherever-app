import React from 'react';
import { View } from 'react-native';
import { ContentContainer, ScreenContainer, Text } from '../../../components';

const SignUpScreen = (): JSX.Element => (
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

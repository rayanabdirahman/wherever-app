import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const StoresScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Stores Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default StoresScreen;

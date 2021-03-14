import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const SettingsScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text large bold>
          Settings Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default SettingsScreen;

import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const ProfileScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Profile Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default ProfileScreen;

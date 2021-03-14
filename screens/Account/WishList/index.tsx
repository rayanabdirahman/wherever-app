import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const WishListScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text large bold>
          Wish List Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default WishListScreen;

import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const OrdersFeedScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text large bold>
          Orders Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default OrdersFeedScreen;

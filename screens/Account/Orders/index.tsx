import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const OrdersScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Orders Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default OrdersScreen;

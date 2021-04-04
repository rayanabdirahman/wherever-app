import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const CartScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Cart Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default CartScreen;

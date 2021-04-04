import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const PaymentsScreen = (): JSX.Element => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text lg bold>
            Payments Screen
          </Text>
        </View>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default PaymentsScreen;

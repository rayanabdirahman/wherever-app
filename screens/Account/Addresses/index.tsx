import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const AddressesScreen = (): JSX.Element => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <View>
          <Text lg bold>
            Addresses Screen
          </Text>
        </View>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default AddressesScreen;

import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const FeedScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Feed Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default FeedScreen;

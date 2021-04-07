import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const CommentsScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Comments Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default CommentsScreen;

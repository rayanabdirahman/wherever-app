import React from 'react';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';

const PostScreen = (): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Post Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default PostScreen;

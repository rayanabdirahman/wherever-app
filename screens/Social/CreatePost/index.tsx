import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { ScreenContainer, ContentContainer, Text } from '../../../components';
import {
  FeedStackParamList,
  FeedStackScreenName
} from '../../../navigation/interfaces';

const CreatePostScreen = ({
  navigation
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.CREATE_POST
>): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          CreatePost Screen
        </Text>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default CreatePostScreen;

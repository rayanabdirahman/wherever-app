import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button
} from '../../../components';
import {
  FeedStackParamList,
  FeedStackScreenName
} from '../../../navigation/interfaces';

const FeedScreen = ({
  navigation
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.FEED
>): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <Text lg bold>
          Feed Screen
        </Text>
        <Button
          onPress={() => navigation.navigate(FeedStackScreenName.COMMENTS)}
        >
          Comments
        </Button>
        <Button
          onPress={() => navigation.navigate(FeedStackScreenName.CREATE_POST)}
        >
          Create post
        </Button>
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default FeedScreen;

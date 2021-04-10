import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  ScreenContainer,
  ContentContainer,
  PostFooter,
  PostHeader,
  Post,
  PostProducts
} from '../../../components';
import {
  FeedStackParamList,
  FeedStackScreenName
} from '../../../navigation/interfaces';
import { FlatList } from 'react-native-gesture-handler';
import { Posts } from '../../../sample/posts';
import { PostModel } from '../../../domain/interfaces/social';

const FeedScreen = ({
  navigation
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.FEED
>): JSX.Element => {
  const renderItem = ({ item: post }: { item: PostModel }) => (
    <Post>
      <PostHeader
        onPress={() => alert('Go to store')}
        username={post.postedBy.username}
        avatar={post.postedBy.avatar}
      />
      <PostProducts />
      <PostFooter
        username={post.postedBy.username}
        caption={post.content}
        likes={post.likes?.length}
        onLikePress={() => alert('Like pressed!')}
        comments={post.likes?.length}
        onCommentPress={() => navigation.navigate(FeedStackScreenName.COMMENTS)}
      />
    </Post>
  );

  return (
    <ScreenContainer>
      <ContentContainer>
        <FlatList
          style={{}}
          showsVerticalScrollIndicator={false}
          data={Posts}
          keyExtractor={(post: PostModel) => post._id}
          renderItem={renderItem}
        />
      </ContentContainer>
    </ScreenContainer>
  );
};

export default FeedScreen;

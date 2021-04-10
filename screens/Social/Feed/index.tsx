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
import { PostModel } from '../../../domain/interfaces/social';
import { useSelector } from 'react-redux';
import { State } from '../../../store';
import { PostState } from '../../../store/interfaces';
import usePosts from '../../../hooks/usePosts';

const FeedScreen = ({
  navigation
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.FEED
>): JSX.Element => {
  const isFetchingComplete = usePosts();
  const { posts } = useSelector<State, PostState>((state) => state.post);

  const renderItem = ({ item: post }: { item: PostModel }) => (
    <Post>
      <PostHeader onPress={() => alert('Go to store')} user={post.postedBy} />
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
        {isFetchingComplete && (
          <FlatList
            style={{}}
            showsVerticalScrollIndicator={false}
            data={posts}
            keyExtractor={(post: PostModel) => post._id}
            renderItem={renderItem}
          />
        )}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default FeedScreen;

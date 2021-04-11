import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ScreenContainer, ContentContainer, Post } from '../../../components';
import {
  FeedStackParamList,
  FeedStackScreenName
} from '../../../navigation/interfaces';
import { FlatList } from 'react-native-gesture-handler';
import { PostModel } from '../../../domain/interfaces/social';
import { useSelector } from 'react-redux';
import { State } from '../../../store';
import { PostState } from '../../../store/interfaces';
import usePosts from '../../../hooks/social/usePosts';
import usePostLike from '../../../hooks/social/usePostLike';

const FeedScreen = ({
  navigation
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.FEED
>): JSX.Element => {
  const isFetchingComplete = usePosts();
  const updatePostLikes = usePostLike();
  const { posts } = useSelector<State, PostState>((state) => state.post);

  const keyExtractor = React.useCallback(
    (post: PostModel) => post._id.toString(),
    []
  );

  const renderItem = React.useCallback(
    ({ item: post }: { item: PostModel }) => (
      <Post
        post={post}
        onLikePress={() => updatePostLikes(post._id)}
        onCommentPress={() => navigation.navigate(FeedStackScreenName.COMMENTS)}
      />
    ),
    []
  );

  const getItemLayout = React.useCallback(
    (data, index) => ({
      length: 100,
      offset: 100 * index,
      index
    }),
    []
  );

  return (
    <ScreenContainer>
      <ContentContainer>
        {isFetchingComplete && (
          <FlatList
            style={{}}
            showsVerticalScrollIndicator={false}
            data={posts}
            initialNumToRender={20}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
          />
        )}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default FeedScreen;

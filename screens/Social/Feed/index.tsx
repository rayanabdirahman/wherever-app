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

  const renderItem = ({ item: post }: { item: PostModel }) => (
    <Post>
      <PostHeader
        onPress={() => alert('Go to store')}
        user={post.postedBy}
        timeStamp={post.createdAt}
      />
      <PostProducts />
      <PostFooter
        username={post.postedBy.username}
        caption={post.content}
        likeButtonId={post._id}
        likes={post.likes?.length}
        onLikePress={() => updatePostLikes(post._id)}
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

import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PostModel } from '../../../domain/interfaces/social';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostProducts from './PostProducts';

type Props = TouchableOpacity['props'] &
  View['props'] & {
    post: PostModel;
    onLikePress: () => void;
    onCommentPress: () => void;
  };

const Post = ({ post, onLikePress, onCommentPress }: Props): JSX.Element => (
  <View style={{ marginBottom: 24 }}>
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
      onLikePress={onLikePress}
      comments={post.comments?.length}
      onCommentPress={onCommentPress}
    />
  </View>
);

export default React.memo(Post);

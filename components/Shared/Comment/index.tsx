import React from 'react';
import { View } from 'react-native';
import { Thumbnail } from 'native-base';
import styled from 'styled-components/native';
import Text from '../Text';
import { PostModel } from '../../../domain/interfaces/social';
import { timeDifference } from '../../../utilities/time-difference';
import LikeButton from '../LikeButton';

type Props = {
  post: PostModel;
  onLikePress?: () => void;
  showLikeIcon?: boolean | undefined;
};

const Comment = ({ post, onLikePress, showLikeIcon }: Props): JSX.Element => (
  <Container>
    <Thumbnail
      style={{ marginRight: 16 }}
      small
      source={{ uri: post.postedBy.avatar }}
    />

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
      }}
    >
      <View>
        <View style={{ marginBottom: 8 }}>
          <Text sm bold>
            {post.postedBy.username}
          </Text>
          <Text sm>{post.content}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 8 }} xs light bold>
            {timeDifference(new Date(), new Date(post.createdAt))}
          </Text>
          <Text style={{ marginRight: 8 }} xs light bold>
            {post.likes?.length ? `${post.likes?.length} likes` : ''}
          </Text>
        </View>
      </View>

      {showLikeIcon === undefined || showLikeIcon === true ? (
        <LikeButton
          onPress={onLikePress}
          style={{ marginRight: 0 }}
          showNumberOfLikes={false}
          _id={post._id}
          likes={post.likes?.length}
        />
      ) : null}
    </View>
  </Container>
);

const Container = styled.View<View['props']>`
  margin-bottom: 24px;
  flex-direction: row;
`;

export default Comment;

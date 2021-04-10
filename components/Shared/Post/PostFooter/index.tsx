import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Caption from '../../Caption';
import CommentButton from '../../CommentButton';
import LikeButton from '../../LikeButton';

type Props = View['props'] & {
  username: string;
  caption: string;
  likes: number | undefined;
  onLikePress: () => void;
  onCommentPress: () => void;
  comments: number | undefined;
};

const PostFooter = (props: Props): JSX.Element => (
  <Container>
    <View style={{ flexDirection: 'row' }}>
      <LikeButton onPress={props.onLikePress} likes={props.likes} />
      <CommentButton onPress={props.onCommentPress} comments={props.likes} />
    </View>
    <Caption username={props.username} caption={props.caption} />
  </Container>
);

const Container = styled.View<View['props']>`
  display: flex;
  flex-direction: column;
`;

export default PostFooter;
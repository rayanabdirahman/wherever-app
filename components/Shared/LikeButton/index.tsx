import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { State } from '../../../store';
import { PostState } from '../../../store/interfaces';
import Icon, { IconTypeEnum } from '../Icon';
import Text from '../Text';

type Props = TouchableOpacity['props'] & {
  _id: string;
  likes: number | undefined;
};

const LikeButton = (props: Props): JSX.Element => {
  const { likedPost } = useSelector<State, PostState>((state) => state.post);
  const isLiked =
    props.likes || (likedPost?._id === props._id && likedPost.likes?.length)
      ? true
      : false;
  const likeLength =
    likedPost?._id === props._id ? likedPost?.likes?.length : props.likes;
  return (
    <Button {...props}>
      <Icon
        type={IconTypeEnum.IONICONS}
        style={{ marginRight: 8 }}
        name={isLiked ? 'heart-sharp' : 'heart-outline'}
        color={isLiked ? Colors.red : Colors.black}
      />
      {isLiked ? (
        <Text style={{ marginBottom: 0 }} sm bold>
          {likeLength}
        </Text>
      ) : null}
    </Button>
  );
};

const Button = styled.TouchableOpacity<Props>`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  align-items: center;
  margin-bottom: 8px;
`;

export default LikeButton;

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Icon, { IconTypeEnum } from '../Icon';
import Text from '../Text';

type Props = TouchableOpacity['props'] & {
  comments: number | undefined;
};

const CommentButton = (props: Props): JSX.Element => (
  <Button {...props}>
    <Icon
      type={IconTypeEnum.IONICONS}
      style={{ marginRight: 8 }}
      name="chatbubble-ellipses-outline"
      color={Colors.black}
    />
    {props.comments ? (
      <Text style={{ marginBottom: 0 }} sm bold>
        {props.comments}
      </Text>
    ) : null}
  </Button>
);

const Button = styled.TouchableOpacity<Props>`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  align-items: center;
  margin-bottom: 8px;
`;

export default CommentButton;

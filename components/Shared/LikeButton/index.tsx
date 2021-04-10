import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Icon, { IconTypeEnum } from '../Icon';
import Text from '../Text';

type Props = TouchableOpacity['props'] & {
  likes: number | undefined;
};

const LikeButton = (props: Props): JSX.Element => (
  <Button {...props}>
    <Icon
      type={IconTypeEnum.IONICONS}
      style={{ marginRight: 8 }}
      name={props.likes ? 'heart-sharp' : 'heart-outline'}
      color={props.likes ? Colors.red : Colors.darkgrey}
    />
    {props.likes ? (
      <Text style={{ marginBottom: 0 }} sm bold>
        {props.likes}
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

export default LikeButton;

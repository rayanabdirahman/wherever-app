import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Text from '../Text';

type Props = DefaultTouchableOpacity['props'] & {
  bold?: boolean;
  disabled?: boolean;
  success?: boolean;
};

const TouchableOpacity = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled, success }) =>
    disabled
      ? theme.color.lightgrey
      : success
      ? theme.color.green
      : theme.color.black};
  border-radius: 4px;
`;

const Button = (props: Props): JSX.Element => (
  <TouchableOpacity {...props}>
    <Text style={{ color: Colors.white }}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;

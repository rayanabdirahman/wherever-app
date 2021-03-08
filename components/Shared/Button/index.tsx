import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Text from '../Text';

type Props = DefaultTouchableOpacity['props'] & {
  bold?: boolean;
};

const TouchableOpacity = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 100px;
`;

const Button = (props: Props): JSX.Element => (
  <TouchableOpacity {...props}>
    <Text style={{ color: Colors.white }}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;

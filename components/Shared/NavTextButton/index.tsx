import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultTouchableOpacity['props'] & {
  bold?: boolean;
  light?: boolean;
};

const Button = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-right: 24px;
`;

const Text = styled.Text<Props>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, light }) =>
    light ? theme.color.white : theme.color.darkgrey};
`;

const NavTextButton = (props: Props): JSX.Element => (
  <Button onPress={props.onPress}>
    <Text {...props}>{props.children}</Text>
  </Button>
);

export default NavTextButton;

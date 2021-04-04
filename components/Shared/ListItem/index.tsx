import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Icon from '../Icon';

type Props = DefaultTouchableOpacity['props'] & {
  bold?: boolean;
  light?: boolean;
  brand?: boolean;
};

const Button = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Text = styled.Text<Props>`
  font-size: 16px;
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, light, brand }) =>
    light ? theme.color.white : brand ? theme.color.brand : theme.color.black};
`;

export const ListItemWithIcon = (props: Props): JSX.Element => (
  <Button onPress={props.onPress}>
    <Text bold {...props}>
      {props.children}
    </Text>
    <Icon style={{ fontSize: 20 }} name="right" color={Colors.black} />
  </Button>
);

export const ListItem = (props: Props): JSX.Element => (
  <Button onPress={props.onPress}>
    <Text {...props}>{props.children}</Text>
  </Button>
);

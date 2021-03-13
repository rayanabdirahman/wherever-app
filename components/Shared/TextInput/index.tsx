import React from 'react';
import styled from 'styled-components/native';
import {
  View as DefaultView,
  TextInput as DefaultTextInput
} from 'react-native';
import Colors from '../../../constants/Colors';
import Icon from '../Icon';

type Props = DefaultTextInput['props'] & {
  icon: string;
};

const Container = styled.View<DefaultView['props']>`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.lightgrey};
  margin-bottom: 48px;
  padding-bottom: 16px;
`;

export const TextInputWithIcon = (props: Props): JSX.Element => (
  <Container>
    <Icon
      type="Feather"
      style={{ marginRight: 12 }}
      name={props.icon}
      color={Colors.darkgrey}
    />
    <DefaultTextInput style={{ width: '100%' }} {...props} />
  </Container>
);

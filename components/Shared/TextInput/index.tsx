import React from 'react';
import styled from 'styled-components/native';
import {
  View as DefaultView,
  TextInput as DefaultTextInput
} from 'react-native';
import Colors from '../../../constants/Colors';
import Icon from '../Icon';
import Text from '../Text';

type Props = DefaultTextInput['props'] &
  DefaultView['props'] & {
    icon: string;
    error?: string | boolean;
  };

const Container = styled.View<DefaultView['props']>`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.lightgrey};
  padding-bottom: 16px;
`;

export const TextInputWithIcon = (props: Props): JSX.Element => (
  <DefaultView style={{ marginBottom: 48 }}>
    <Container {...props}>
      <Icon
        type="Feather"
        style={{ marginRight: 12 }}
        name={props.icon}
        color={Colors.darkgrey}
      />
      <DefaultTextInput style={{ width: '100%' }} {...props} />
    </Container>
    {props.error && (
      <Text style={{ fontSize: 10, marginTop: 16, color: Colors.red }}>
        {props.error}
      </Text>
    )}
  </DefaultView>
);

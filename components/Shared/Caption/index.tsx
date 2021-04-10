import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

type Props = View['props'] & {
  username: string;
  caption: string;
};

const Caption = ({ username, caption }: Props): JSX.Element => (
  <CaptionContainer>
    <Text sm bold style={{ marginRight: 4 }}>
      {username}
    </Text>
    <Text sm>{caption}</Text>
  </CaptionContainer>
);

const CaptionContainer = styled.View<View['props']>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export default Caption;

import React from 'react';
import { View as DefaultView } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultView['props'];

const Container = styled.View<Props>`
  margin-top: 16px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.color.white};
  height: 100%;
`;

const ContentContainer = ({ children }: Props): JSX.Element => (
  <Container>{children}</Container>
);

export default ContentContainer;

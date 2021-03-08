import React from 'react';
import { SafeAreaView as DefaultSafeAreaView } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultSafeAreaView['props'];

const SafeAreaView = styled.SafeAreaView<Props>`
  background-color: ${({ theme }) => theme.color.white};
`;

const ScreenContainer = ({ children }: Props): JSX.Element => (
  <SafeAreaView>{children}</SafeAreaView>
);

export default ScreenContainer;

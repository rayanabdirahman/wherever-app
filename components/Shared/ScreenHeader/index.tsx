import React from 'react';
import { View as DefaultView, View } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Text from '../Text';

type Props = {
  title?: string;
  icon?: string;
  subTitle?: string;
};

const ScreenHeader = ({ title, subTitle }: Props): JSX.Element => (
  <View style={{ marginBottom: 32 }}>
    <Container>
      {title && (
        <Text lg bold>
          {title}
        </Text>
      )}
    </Container>
    {subTitle && (
      <Text sm bold style={{ color: Colors.darkgrey }}>
        {subTitle}
      </Text>
    )}
  </View>
);

const Container = styled.View<DefaultView['props']>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export default ScreenHeader;

import React from 'react';
import { View as DefaultView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Icon from '../Icon';
import Text from '../Text';

type Props = {
  title?: string;
  icon?: string;
  subTitle?: string;
};

const Container = styled.View<DefaultView['props']>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const NavHeader = ({ title, subTitle, icon }: Props): JSX.Element => (
  <SafeAreaView
    style={{ paddingLeft: 20, paddingRight: 20, backgroundColor: Colors.white }}
  >
    <Container>
      {title && (
        <Text lg bold>
          {title}
        </Text>
      )}

      {icon && (
        <Icon size={20} type="Feather" name={icon} color={Colors.darkgrey} />
      )}
    </Container>
    {subTitle && (
      <Text sm bold style={{ color: '#6F6879' }}>
        {subTitle}
      </Text>
    )}
  </SafeAreaView>
);

export default NavHeader;

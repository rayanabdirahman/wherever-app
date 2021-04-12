import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Icon, { IconTypeEnum } from '../Icon';

const BackButton = (): JSX.Element => (
  <Button>
    <Icon
      style={{ fontSize: 32 }}
      type={IconTypeEnum.FEATHER}
      name="chevron-left"
      color={Colors.black}
    />
  </Button>
);

const Button = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;

export default BackButton;

import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import Icon from '../Icon';

// const Button = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.color.lightgrey};
//   border-radius: 100px;
//   margin-left: 16px;
// `;

// const BackButton = (): JSX.Element => (
//   <Button>
//     <Icon type="Feather" name="chevron-left" color={Colors.darkgrey} />
//   </Button>
// );

const Button = styled.TouchableOpacity<DefaultTouchableOpacity['props']>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;

const BackButton = (): JSX.Element => (
  <Button>
    <Icon
      style={{ fontSize: 32 }}
      type="Feather"
      name="chevron-left"
      color={Colors.black}
    />
  </Button>
);

export default BackButton;

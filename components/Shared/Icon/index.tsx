/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { StyleProp, TextStyle, View } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';

export enum IconTypeEnum {
  FEATHER = 'Feather',
  IONICONS = 'Ionicons'
}

const CustomIconContainer = styled.View<View['props']>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.green};
  margin-right: 8px;
`;

const Icon = (props: {
  name: string | any;
  color: string;
  type?: IconTypeEnum;
  size?: number;
  style?: StyleProp<TextStyle>;
}): JSX.Element =>
  props.type === IconTypeEnum.FEATHER ? (
    <Feather size={props.size || 24} style={{ marginBottom: -3 }} {...props} />
  ) : props.type === IconTypeEnum.IONICONS ? (
    <Ionicons size={props.size || 24} style={{ marginBottom: -3 }} {...props} />
  ) : (
    <AntDesign
      size={props.size || 24}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );

export const PurchasedIcon = (): JSX.Element => (
  <CustomIconContainer>
    <Icon
      type={IconTypeEnum.IONICONS}
      style={{ margin: 0 }}
      size={14}
      name="logo-usd"
      color={Colors.white}
    />
  </CustomIconContainer>
);

export default Icon;

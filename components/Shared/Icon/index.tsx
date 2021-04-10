/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { StyleProp, TextStyle } from 'react-native';

export enum IconTypeEnum {
  FEATHER = 'Feather',
  IONICONS = 'Ionicons'
}

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

export default Icon;

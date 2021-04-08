/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { StyleProp, TextStyle } from 'react-native';

const Icon = (props: {
  name: string | any;
  color: string;
  type?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}): JSX.Element =>
  props.type === 'Feather' ? (
    <Feather size={props.size || 24} style={{ marginBottom: -3 }} {...props} />
  ) : (
    <AntDesign
      size={props.size || 24}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );

export default Icon;

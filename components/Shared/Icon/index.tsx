/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';

const Icon = (props: {
  name: string | any;
  color: string;
  type?: string;
}): JSX.Element =>
  props.type === 'Feather' ? (
    <Feather size={24} style={{ marginBottom: -3 }} {...props} />
  ) : (
    <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />
  );

export default Icon;

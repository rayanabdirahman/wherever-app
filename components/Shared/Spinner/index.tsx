import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../../constants/Theme';

const Spinner = (): JSX.Element => (
  <ActivityIndicator
    style={{ height: '100%' }}
    size="large"
    color={theme.color.darkgrey}
  />
);

export default Spinner;

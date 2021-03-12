import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import theme from '../../../constants/Theme';
import { State } from '../../../store';
import { NavigationState } from '../../../store/interfaces';

const Spinner = (): JSX.Element | null => {
  const { isLoading } = useSelector<State, NavigationState>(
    (state) => state.navigation
  );
  return isLoading ? (
    <ActivityIndicator
      style={{ height: '100%' }}
      size="large"
      color={theme.color.darkgrey}
    />
  ) : null;
};

export default Spinner;

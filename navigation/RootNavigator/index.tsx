import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../BottomTabNavigator';
import { RootStackParamList, RootStackScreenName } from '../interfaces';

const Stack = createStackNavigator<RootStackParamList>();
const RootNavigator = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={RootStackScreenName.ROOT}
      component={BottomTabNavigator}
    />
  </Stack.Navigator>
);

export default RootNavigator;

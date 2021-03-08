import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../BottomTabNavigator';

const Stack = createStackNavigator();
const RootNavigator = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default RootNavigator;

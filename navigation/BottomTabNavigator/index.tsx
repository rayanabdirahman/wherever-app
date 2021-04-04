import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { BackButton, Button, Icon } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../store/actions/account';
import {
  AccountStackParamList,
  AccountStackScreenName,
  BottomTabParamList,
  BottomTabScreenName
} from '../interfaces';
import {
  AddressesScreen,
  OrdersScreen,
  PaymentsScreen,
  ProfileScreen,
  SettingsScreen
} from '../../screens';
import { createStackNavigator } from '@react-navigation/stack';

const ScreenOptions = {
  title: '',
  headerShown: true,
  headerBackTitle: ' ',
  headerBackImage: () => <BackButton />,
  headerStyle: { shadowOpacity: 0 }
};

const PlaceHolderScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button success onPress={() => dispatch(signOutUser())}>
          Sign out
        </Button>
      </View>
    </SafeAreaView>
  );
};

const AccountStack = createStackNavigator<AccountStackParamList>();
const AccountNavigator = () => (
  <AccountStack.Navigator
    initialRouteName={AccountStackScreenName.SETTINGS}
    screenOptions={ScreenOptions}
  >
    <AccountStack.Screen
      options={{ title: 'Account' }}
      name={AccountStackScreenName.SETTINGS}
      component={SettingsScreen}
    />
    <AccountStack.Screen
      options={{ title: 'Profile' }}
      name={AccountStackScreenName.PROFILE}
      component={ProfileScreen}
    />
    <AccountStack.Screen
      options={{ title: 'Orders' }}
      name={AccountStackScreenName.ORDERS}
      component={OrdersScreen}
    />
    <AccountStack.Screen
      options={{ title: 'Addresses' }}
      name={AccountStackScreenName.ADDRESSES}
      component={AddressesScreen}
    />
    <AccountStack.Screen
      options={{ title: 'Payments' }}
      name={AccountStackScreenName.PAYMENTS}
      component={PaymentsScreen}
    />
  </AccountStack.Navigator>
);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigator = (): JSX.Element => (
  <BottomTab.Navigator
    initialRouteName={BottomTabScreenName.FEED}
    tabBarOptions={{
      activeTintColor: Colors.black,
      inactiveTintColor: Colors.darkgrey,
      showLabel: false
    }}
  >
    <BottomTab.Screen
      name={BottomTabScreenName.FEED}
      component={PlaceHolderScreen}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="earth" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenName.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="user" color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;

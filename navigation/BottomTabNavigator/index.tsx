import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BackButton, Icon } from '../../components';
import Colors from '../../constants/Colors';
import {
  AccountStackParamList,
  AccountStackScreenName,
  BottomTabParamList,
  BottomTabScreenName,
  CartStackParamList,
  CartStackScreenName,
  FeedStackParamList,
  FeedStackScreenName,
  StoresStackParamList,
  StoresStackScreenName
} from '../interfaces';
import {
  AddressesScreen,
  CartScreen,
  FeedScreen,
  OrdersScreen,
  PaymentsScreen,
  ProfileScreen,
  SettingsScreen,
  StoresScreen
} from '../../screens';
import { createStackNavigator } from '@react-navigation/stack';

const ScreenOptions = {
  title: '',
  headerShown: true,
  headerBackTitle: ' ',
  headerBackImage: () => <BackButton />,
  headerStyle: { shadowOpacity: 0 }
};

const AccountStack = createStackNavigator<AccountStackParamList>();
const AccountNavigator = () => (
  <AccountStack.Navigator
    initialRouteName={AccountStackScreenName.SETTINGS}
    screenOptions={ScreenOptions}
  >
    <AccountStack.Screen
      options={{ headerShown: false }}
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

const FeedStack = createStackNavigator<FeedStackParamList>();
const FeedNavigator = () => (
  <FeedStack.Navigator
    initialRouteName={FeedStackScreenName.FEED}
    screenOptions={ScreenOptions}
  >
    <FeedStack.Screen
      options={{ headerShown: false }}
      name={FeedStackScreenName.FEED}
      component={FeedScreen}
    />
    <FeedStack.Screen
      options={{ title: 'Comments' }}
      name={FeedStackScreenName.COMMENTS}
      component={ProfileScreen}
    />
  </FeedStack.Navigator>
);

const StoresStack = createStackNavigator<StoresStackParamList>();
const StoresNavigator = () => (
  <StoresStack.Navigator
    initialRouteName={StoresStackScreenName.STORES}
    screenOptions={ScreenOptions}
  >
    <StoresStack.Screen
      options={{ headerShown: false }}
      name={StoresStackScreenName.STORES}
      component={StoresScreen}
    />
  </StoresStack.Navigator>
);

const CartStack = createStackNavigator<CartStackParamList>();
const CartNavigator = () => (
  <CartStack.Navigator
    initialRouteName={CartStackScreenName.CART}
    screenOptions={ScreenOptions}
  >
    <CartStack.Screen
      options={{ headerShown: false }}
      name={CartStackScreenName.CART}
      component={CartScreen}
    />
  </CartStack.Navigator>
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
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="earth" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenName.STORES}
      component={StoresNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="isv" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenName.CART}
      component={CartNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon type="Feather" name="shopping-bag" color={color} />
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

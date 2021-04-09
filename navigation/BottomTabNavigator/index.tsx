import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BackButton, Icon, NavHeader } from '../../components';
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
  CommentsScreen,
  CreatePostScreen,
  FeedScreen,
  OrdersScreen,
  PaymentsScreen,
  PostScreen,
  ProfileScreen,
  SettingsScreen,
  StoreScreen,
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
      options={{
        header: () => (
          <NavHeader
            title="Footfall 🔥"
            subTitle="Activity &amp; purchase orders on workshop"
          />
        )
      }}
      name={FeedStackScreenName.FEED}
      component={FeedScreen}
    />
    <FeedStack.Screen
      options={{ title: 'Create post' }}
      name={FeedStackScreenName.CREATE_POST}
      component={CreatePostScreen}
    />
    <FeedStack.Screen
      options={{ title: 'Post' }}
      name={FeedStackScreenName.POST}
      component={PostScreen}
    />
    <FeedStack.Screen
      options={{ title: 'Comments' }}
      name={FeedStackScreenName.COMMENTS}
      component={CommentsScreen}
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
    <StoresStack.Screen
      name={StoresStackScreenName.STORE}
      component={StoreScreen}
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
          <Ionicons size={24} name="globe-outline" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenName.STORES}
      component={StoresNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Ionicons size={24} name="search-outline" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenName.CART}
      component={CartNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Ionicons size={24} name="pricetags-outline" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenName.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Ionicons size={24} name="person-outline" color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import { Button, Icon, Thumbnail } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../store/actions/account';
import {
  BottomTabParamList,
  BottomTabScreenName,
  ProfileStackParamList,
  ProfileStackScreenName
} from '../interfaces';
import { store } from '../../store';
import Fonts from '../../constants/Fonts';
import {
  OrdersFeedScreen,
  SettingsScreen,
  WishListScreen
} from '../../screens';

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

const ProfileStack = createMaterialTopTabNavigator<ProfileStackParamList>();
const ProfileNavigator = () => (
  <ProfileStack.Navigator
    initialRouteName={ProfileStackScreenName.ORDERS_FEED}
    tabBarPosition="top"
    tabBarOptions={{
      activeTintColor: Colors.black,
      inactiveTintColor: Colors.darkgrey,
      labelStyle: {
        fontSize: 18,
        fontFamily: Fonts.serifBold,
        textTransform: 'none'
      },
      indicatorStyle: {
        backgroundColor: Colors.black
      },
      tabStyle: {
        marginTop: 48
      }
    }}
  >
    <ProfileStack.Screen
      options={{ title: 'Orders' }}
      name={ProfileStackScreenName.ORDERS_FEED}
      component={OrdersFeedScreen}
    />
    <ProfileStack.Screen
      options={{ title: 'Wishes' }}
      name={ProfileStackScreenName.WISH_LIST}
      component={WishListScreen}
    />
    <ProfileStack.Screen
      options={{ title: 'Settings' }}
      name={ProfileStackScreenName.SETTINGS}
      component={SettingsScreen}
    />
  </ProfileStack.Navigator>
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
      name={BottomTabScreenName.PROFILE}
      component={ProfileNavigator}
      options={{
        tabBarIcon: () => {
          const { user } = store.getState().session.payload;
          return (
            <Thumbnail
              small
              style={{ marginBottom: -3 }}
              source={{ uri: user && user.avatar }}
            />
          );
        }
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { createStackNavigator } from '@react-navigation/stack';
import { store } from '../../store';

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

const ProfileStack = createStackNavigator<ProfileStackParamList>();
const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name={ProfileStackScreenName.PROFILE_SCREEN}
      component={PlaceHolderScreen}
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
              style={{ marginBottom: -3 }}
              small
              source={{ uri: user && user.avatar }}
            />
          );
        }
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Button, Icon } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../store/actions/account';

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

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = (): JSX.Element => (
  <BottomTab.Navigator
    initialRouteName={'Feed'}
    tabBarOptions={{
      activeTintColor: Colors.black,
      inactiveTintColor: Colors.darkgrey
    }}
  >
    <BottomTab.Screen
      name={'Feed'}
      component={PlaceHolderScreen}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="earth" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={'Profile'}
      component={PlaceHolderScreen}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="user" color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;

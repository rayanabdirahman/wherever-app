import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import {
  ScreenContainer,
  ContentContainer,
  ListItemWithIcon,
  Button
} from '../../../components';
import {
  AccountStackParamList,
  AccountStackScreenName
} from '../../../navigation/interfaces';
import { signOutUser } from '../../../store/actions/account';

const SettingsScreen = ({
  navigation
}: StackScreenProps<
  AccountStackParamList,
  AccountStackScreenName.SETTINGS
>): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <ContentContainer>
        <View style={{ flex: 0.9 }}>
          <ScrollView>
            <ListItemWithIcon
              onPress={() =>
                navigation.navigate(AccountStackScreenName.PROFILE)
              }
            >
              Profile
            </ListItemWithIcon>
            <ListItemWithIcon
              onPress={() => navigation.navigate(AccountStackScreenName.ORDERS)}
            >
              Orders
            </ListItemWithIcon>
            <ListItemWithIcon
              onPress={() =>
                navigation.navigate(AccountStackScreenName.ADDRESSES)
              }
            >
              Addresses
            </ListItemWithIcon>
            <ListItemWithIcon
              onPress={() =>
                navigation.navigate(AccountStackScreenName.PAYMENTS)
              }
            >
              Payments
            </ListItemWithIcon>
          </ScrollView>
        </View>
        <Button
          style={{ width: '50%' }}
          onPress={() => dispatch(signOutUser())}
        >
          Sign out
        </Button>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SettingsScreen;

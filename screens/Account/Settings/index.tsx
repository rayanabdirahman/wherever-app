import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScreenContainer, ContentContainer, Button } from '../../../components';
import { signOutUser } from '../../../store/actions/account';

const SettingsScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <ContentContainer>
        <View style={{ flex: 0.9 }}></View>
        <View style={{ width: '50%' }}>
          <Button onPress={() => dispatch(signOutUser())}>Sign out</Button>
        </View>
      </ContentContainer>
    </ScreenContainer>
  );
};

export default SettingsScreen;

import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import {
  AuthStackParamList,
  AuthStackScreenName
} from '../../../navigation/interfaces';
import {
  ImageWithContent,
  Button,
  Text,
  TextButton
} from '../../../components';

const image =
  'https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

const LandingScreen = ({
  navigation
}: StackScreenProps<
  AuthStackParamList,
  AuthStackScreenName.LANDING
>): JSX.Element => {
  return (
    <ImageWithContent source={{ uri: image }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 40 }}>
          <ScreenHeader large bold>
            Empowering the highstreet
          </ScreenHeader>
          <Text light>
            Reference site about Lorem Ipsum, giving information on its origins.
          </Text>
        </View>
        <ButtonContainer>
          <Button
            style={{ marginBottom: 20 }}
            onPress={() => navigation.navigate(AuthStackScreenName.SIGN_UP)}
          >
            Sign up
          </Button>
          <TextButton onPress={() => alert('Set store signup info')}>
            Want to sell on Wherever?
          </TextButton>
        </ButtonContainer>
      </View>
    </ImageWithContent>
  );
};

const ScreenHeader = styled(Text)`
  width: 60%;
  margin-bottom: 16px;
  font-size: 30px;
  line-height: 40px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export default LandingScreen;

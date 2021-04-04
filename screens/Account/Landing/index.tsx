import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import {
  AuthStackParamList,
  AuthStackScreenName
} from '../../../navigation/interfaces';
import {
  Button,
  Text,
  TextButton,
  ContentContainer,
  ScreenContainer
} from '../../../components';

const LandingScreen = ({
  navigation
}: StackScreenProps<
  AuthStackParamList,
  AuthStackScreenName.LANDING
>): JSX.Element => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <HeadingContainer>
          <Text lg bold center>
            Shopping, but better
          </Text>
          <Text light center>
            Shop all your favourite stores from one place
          </Text>
        </HeadingContainer>

        <LinksContainer>
          <Button
            onPress={() => navigation.navigate(AuthStackScreenName.SIGN_UP)}
          >
            Create an account
          </Button>
          <TextButtonContainer>
            <Text>Already have an account? </Text>
            <TextButton
              brand
              bold
              onPress={() => navigation.navigate(AuthStackScreenName.SIGN_IN)}
            >
              Sign in
            </TextButton>
          </TextButtonContainer>
        </LinksContainer>
      </ContentContainer>
    </ScreenContainer>
  );
};

const HeadingContainer = styled.View`
  align-items: center;
  margin-top: 56px;
`;

const LinksContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 0.9;
`;

const TextButtonContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

export default LandingScreen;

import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from '../../Text';
import { UserRolesEnum } from '../../../../domain/enums/account';
import Colors from '../../../../constants/Colors';
import Icon, { IconTypeEnum } from '../../Icon';

const PostStatusIcon = (props: {
  name: string;
  color: string;
}): JSX.Element => (
  <IconContainer style={{ backgroundColor: props.color }}>
    <Icon
      type={IconTypeEnum.IONICONS}
      style={{ margin: 0 }}
      size={14}
      name={props.name}
      color={Colors.white}
    />
  </IconContainer>
);

const PostStatus = (role: UserRolesEnum[]): JSX.Element => {
  switch (role[0]) {
    case UserRolesEnum.SUPER_ADMIN: {
      return (
        <Container>
          <PostStatusIcon name="arrow-up-outline" color={Colors.blue} />
          <Text sm>Product now in stock</Text>
        </Container>
      );
    }
    default: {
      return (
        <Container>
          <PostStatusIcon name="logo-usd" color={Colors.green} />
          <Text sm>
            Purchased from{' '}
            <Text sm bold>
              Footlocker
            </Text>
          </Text>
        </Container>
      );
    }
  }
};

const Container = styled.View<View['props']>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const IconContainer = styled.View<View['props']>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  margin-right: 8px;
`;

export default PostStatus;

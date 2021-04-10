import React from 'react';
import { Thumbnail } from 'native-base';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { PurchasedIcon } from '../../Icon';
import Text from '../../Text';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = TouchableOpacity['props'] &
  View['props'] & {
    username: string;
    avatar: string;
  };

const PostStatus = (): JSX.Element => (
  <PostStatusContainer>
    <PurchasedIcon />
    <Text light sm>
      Purchased from{' '}
      <Text sm light bold>
        Footlocker
      </Text>
    </Text>
  </PostStatusContainer>
);

const PostHeader = (props: Props): JSX.Element => (
  <Container {...props}>
    <Thumbnail
      style={{ marginRight: 16 }}
      small
      source={{ uri: props.avatar }}
    />
    <Details>
      <View>
        <Text sm bold>
          {props.username}
        </Text>
        <PostStatus />
      </View>
      <Text xs light>
        2 min ago
      </Text>
    </Details>
  </Container>
);

const Container = styled.TouchableOpacity<TouchableOpacity['props']>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Details = styled.View<View['props']>`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const PostStatusContainer = styled.View<View['props']>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export default PostHeader;

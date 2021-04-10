import React from 'react';
import { Thumbnail } from 'native-base';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from '../../Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserModel } from '../../../../domain/interfaces/account';
import PostStatus from '../PostStatus';

type Props = TouchableOpacity['props'] &
  View['props'] & {
    user: UserModel;
  };

const PostHeader = (props: Props): JSX.Element => (
  <Container {...props}>
    <Thumbnail
      small
      style={{ marginRight: 16 }}
      source={{ uri: props.user.avatar }}
    />
    <Details>
      <View>
        <Text sm bold>
          {props.user.username}
        </Text>
        <PostStatus {...props.user.role} />
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
  align-items: flex-end;
  margin-bottom: 16px;
`;

const Details = styled.View<View['props']>`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export default PostHeader;

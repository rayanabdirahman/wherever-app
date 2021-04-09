import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Image } from 'react-native';
import { lighten } from 'polished';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button,
  Icon
} from '../../../components';
import {
  FeedStackParamList,
  FeedStackScreenName
} from '../../../navigation/interfaces';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Thumbnail } from 'native-base';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import styled from 'styled-components/native';

const stores = [
  {
    _id: '001',
    name: 'JD Sport',
    image:
      'https://images.unsplash.com/photo-1597094662420-0928ddfa4784?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    _id: '002',
    name: 'Footlocker',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const stores2 = [
  {
    _id: '001',
    name: 'JD Sport',
    image:
      'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

type Props = View['props'] &
  Image['props'] & {
    single?: boolean;
  };

const calcWidth = Layout.window.width - 40;

const PostImageStyles = styled.Image<Props>`
  border-radius: 16px;
  margin-right: 8px;
  width: 100%;
  height: 100%;
`;

const PostImageContainer = styled.View<Props>`
  border-radius: 16px;
  margin-right: 8px;
  width: ${({ single }) => (single ? calcWidth : calcWidth / 2)}px;
  height: ${({ theme }) => theme.layout.window.width / 2.5}px;
`;

const PostImage = (props: Props) => (
  <PostImageContainer {...props}>
    <PostImageStyles {...props} resizeMode="cover" />
  </PostImageContainer>
);

const Post = ({ username, orderItems, avatar, store }: any) => (
  <View style={{ marginBottom: 24 }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
      }}
    >
      <Thumbnail
        source={{
          uri: avatar
        }}
      />
      <View style={{ marginLeft: 16, flexGrow: 1 }}>
        <View
          style={{
            marginBottom: 4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text bold>{username}</Text>
          <Text xs light>
            2 min ago
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: lighten(0.5, Colors.green),
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 4
            }}
          >
            <Icon
              size={14}
              style={{ margin: 0 }}
              type="Feather"
              name="dollar-sign"
              color={Colors.green}
            />
          </View>
          <Text light sm>
            Purchased from{' '}
            <Text sm light bold>
              {store}
            </Text>
          </Text>
        </View>
      </View>
    </View>

    <View style={{ flexGrow: 1 }}>
      <FlatList
        style={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={orderItems.length > 1 && true}
        data={orderItems}
        keyExtractor={(post: { _id: string; name: string; image: string }) =>
          post._id
        }
        renderItem={({ item }) => (
          <PostImage
            single={orderItems.length > 1 ? false : true}
            source={{ uri: item.image }}
          />
        )}
      />
    </View>
  </View>
);

const FeedScreen = ({
  navigation
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.FEED
>): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <ScrollView>
        <Post
          username="Brad Gibbson"
          avatar="https://randomuser.me/api/portraits/med/men/78.jpg"
          orderItems={stores}
          store="Footlocker"
        />
        <Post
          username="John Doe"
          avatar="https://randomuser.me/api/portraits/med/women/76.jpg"
          orderItems={stores2}
          store="JD Sport"
        />
      </ScrollView>
    </ContentContainer>
  </ScreenContainer>
);

export default FeedScreen;

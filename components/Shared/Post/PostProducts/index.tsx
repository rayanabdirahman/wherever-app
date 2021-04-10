import React from 'react';
import { View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Layout from '../../../../constants/Layout';
import { PostOrders1 } from '../../../../sample/posts';

type Props = View['props'] &
  Image['props'] & {
    single?: boolean;
  };

const PostProducts = (): JSX.Element => (
  <FlatList
    style={{ marginBottom: 16 }}
    horizontal
    showsHorizontalScrollIndicator={false}
    scrollEnabled={PostOrders1.length > 1 && true}
    data={PostOrders1}
    keyExtractor={(post: { _id: string; name: string; image: string }) =>
      post._id
    }
    renderItem={({ item }) => (
      <PostImage
        single={PostOrders1.length > 1 ? false : true}
        source={{ uri: item.image }}
      />
    )}
  />
);

const PostImage = (props: Props) => (
  <PostImageContainer {...props}>
    <PostImageStyles {...props} resizeMode="cover" />
  </PostImageContainer>
);

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

export default PostProducts;

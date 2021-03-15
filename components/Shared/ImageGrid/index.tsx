import React from 'react';
import {
  FlatList,
  TouchableOpacity as DefaultTouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';
import Layout from '../../../constants/Layout';

type Props = DefaultTouchableOpacity['props'] & {
  images: string[];
};

const ImageContainer = styled.TouchableOpacity<Props>`
  width: ${() => (Layout.window.width - 40) / 3}px;
  height: ${() => (Layout.window.width - 40) / 3}px;
  margin-bottom: 8px;
`;

const Image = styled.Image`
  flex: 1;
  border-radius: 4px;
`;

const ImageGrid = (props: Props): JSX.Element => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <ImageContainer
        {...props}
        style={[index % 4 !== 0 ? { paddingLeft: 8 } : { paddingLeft: 0 }]}
      >
        <Image source={{ uri: item }} resizeMode="stretch" />
      </ImageContainer>
    );
  };
  return (
    <FlatList
      horizontal={false}
      scrollEnabled={props.images.length > 2 ? true : false}
      data={props.images}
      renderItem={renderItem}
      keyExtractor={(item: string) => item}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      numColumns={4}
    />
  );
};

export default ImageGrid;

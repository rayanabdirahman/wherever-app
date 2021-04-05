import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Button,
  ImageGrid
} from '../../../components';
import {
  StoresStackParamList,
  StoresStackScreenName
} from '../../../navigation/interfaces';
import { Thumbnail } from 'native-base';

const stores = {
  _id: '001',
  name: 'JD Sport',
  image:
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/150px-JD_Sports_logo.svg.png'
};

const images = [
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1521774971864-62e842046145?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1533680937690-d59ab2543468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHNuZWFrZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
];

const StoreScreen = ({
  route,
  navigation
}: StackScreenProps<
  StoresStackParamList,
  StoresStackScreenName.STORE
>): JSX.Element => {
  const { storeId } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: stores.name,
      headerStyle: { shadowOpacity: 1 }
    });
  }, [storeId, navigation]);

  return (
    <ScreenContainer>
      <ContentContainer>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 32,
            justifyContent: 'space-between'
          }}
        >
          <Thumbnail large source={{ uri: stores.image }} />
          <Button onPress={() => alert('Follow')} style={{ width: '50%' }}>
            Follow
          </Button>
        </View>
        {!images.length ? (
          <View style={{ alignItems: 'center' }}>
            <Text light>
              Products not yet uploaded by store. Follow for notifications
            </Text>
          </View>
        ) : (
          <ImageGrid onPress={() => alert('image pressed')} images={images} />
        )}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default StoreScreen;

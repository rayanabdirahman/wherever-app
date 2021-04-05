import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  ThumbnailWithText
} from '../../../components';
import {
  StoresStackParamList,
  StoresStackScreenName
} from '../../../navigation/interfaces';

const stores = [
  {
    _id: '001',
    name: 'JD Sport',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/150px-JD_Sports_logo.svg.png'
  },
  {
    _id: '002',
    name: 'Footlocker',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Foot_Locker_logo.svg/220px-Foot_Locker_logo.svg.png'
  }
];

const StoresScreen = ({
  navigation
}: StackScreenProps<
  StoresStackParamList,
  StoresStackScreenName.STORES
>): JSX.Element => (
  <ScreenContainer>
    <ContentContainer>
      <View>
        <FlatList
          style={{ height: '100%' }}
          data={stores}
          keyExtractor={(post: { _id: string; name: string; image: string }) =>
            post._id
          }
          renderItem={({ item }) => (
            <ThumbnailWithText
              onPress={() =>
                navigation.navigate(StoresStackScreenName.STORE, {
                  storeId: item._id
                })
              }
              heading={item.name}
              source={{ uri: item.image }}
            />
          )}
        />
      </View>
    </ContentContainer>
  </ScreenContainer>
);

export default StoresScreen;

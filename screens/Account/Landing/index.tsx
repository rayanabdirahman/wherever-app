import React from 'react';
import { View } from 'react-native';
import { ImageWithContent, Button, Text } from '../../../components';

const LandingScreen = ({ navigation }: any): JSX.Element => {
  return (
    <ImageWithContent
      source={{
        uri:
          'https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 40 }}>
          <Text
            style={{
              width: '60%',
              marginBottom: 16,
              fontSize: 30,
              lineHeight: 40
            }}
            large
            bold
          >
            Empowering the highstreet
          </Text>
          <Text light>
            Reference site about Lorem Ipsum, giving information on its origins.
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexGrow: 0.5
          }}
        >
          <Button
            style={{ marginBottom: 20 }}
            onPress={() => navigation.navigate('SIGN_UP')}
          >
            Sign up
          </Button>
          <Text light>Want to sell on Wherever?</Text>
        </View>
      </View>
    </ImageWithContent>
  );
};

export default LandingScreen;

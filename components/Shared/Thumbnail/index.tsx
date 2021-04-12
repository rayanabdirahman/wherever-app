import React from 'react';
import {
  TouchableOpacity as DefaultTouchableOpacity,
  View
} from 'react-native';
import { Thumbnail as DefaultThumbnail } from 'native-base';
import styled from 'styled-components/native';
import Text from '../Text';

type WithTextProps = DefaultTouchableOpacity['props'] &
  DefaultThumbnail['props'] & {
    small?: boolean;
    large?: boolean;
    heading?: string;
    subHeading?: string;
  };

const Button = styled.TouchableOpacity<WithTextProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ThumbnailWithText = (props: WithTextProps): JSX.Element => (
  <Button {...props}>
    <DefaultThumbnail style={{ marginRight: 16 }} {...props} />
    <View style={{}}>
      {props.heading && (
        <Text sm bold style={{ marginBottom: 4 }}>
          {props.heading}
        </Text>
      )}
      {props.subHeading && (
        <Text xs light>
          {props.subHeading}
        </Text>
      )}
    </View>
  </Button>
);

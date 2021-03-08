import React from 'react';
import { View as DefaultView, Image as DefaultImage } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import ContentContainer from '../../Layout/ContentContainer';
import ScreenContainer from '../../Layout/ScreenContainer';

type Props = DefaultImage['props'] & DefaultView['props'];

const Image = styled.Image<DefaultImage['props']>`
  width: 100%;
  height: 440px;
  margin-bottom: 16px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
`;

const ImageWithContent = (props: Props): JSX.Element => (
  <DefaultView style={{ backgroundColor: Colors.white }}>
    <Image source={props.source} />
    <ScreenContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </ScreenContainer>
  </DefaultView>
);

export default ImageWithContent;

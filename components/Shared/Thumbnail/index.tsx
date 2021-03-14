import { Image as DefaultImage } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultImage['props'] & {
  small?: boolean;
  large?: boolean;
};

const Thumbnail = styled.Image<Props>`
  width: ${({ small }) => (small ? '28px' : '40px')};
  height: ${({ small }) => (small ? '28px' : '40px')};
`;

export default Thumbnail;

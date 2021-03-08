import { Text as DefaultText } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultText['props'] & {
  bold?: boolean;
  light?: boolean;
  large?: boolean;
};

const Text = styled.Text<Props>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, light }) =>
    light ? theme.color.darkgrey : theme.color.black};
  font-size: ${({ theme, large }) =>
    large ? theme.font.size.large : theme.font.size.base};
  margin-bottom: ${({ theme, large }) =>
    large ? theme.layout.margin.base : 'auto'};
`;

export default Text;

import { Text as DefaultText } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultText['props'] & {
  bold?: boolean;
  light?: boolean;
  lg?: boolean;
  sm?: boolean;
  xs?: boolean;
  center?: boolean;
  right?: boolean;
};

const Text = styled.Text<Props>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, light }) =>
    light ? theme.color.darkgrey : theme.color.black};
  font-size: ${({ theme, lg, sm, xs }) =>
    lg
      ? theme.font.size.lg
      : sm
      ? theme.font.size.sm
      : xs
      ? theme.font.size.xs
      : theme.font.size.base};
  text-align: ${({ center, right }) =>
    center ? 'center' : right ? 'right' : 'left'};
  margin-bottom: ${({ theme, lg }) => (lg ? theme.layout.margin.base : 'auto')};
`;

export default Text;

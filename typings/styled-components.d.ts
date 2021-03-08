import 'styled-components';
import theme from '../constants/Theme';

type Theme = typeof theme;

// extend default styled component theme to accept strong typed properties
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

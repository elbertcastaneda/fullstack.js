import * as styledComponents from 'styled-components';
import { BaseTheme, darkTheme, lightTheme } from './themes';

// eslint-disable-next-line @typescript-eslint/unbound-method
const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<BaseTheme>;

export default styled;
export { css, darkTheme, injectGlobal, keyframes, lightTheme, ThemeProvider };

import * as styledComponents from 'styled-components';
import { BaseTheme, BaseThemeColors, darkTheme, lightTheme } from './themes';

// eslint-disable-next-line @typescript-eslint/unbound-method
const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<BaseTheme>;

interface ThemeProviderProps {
  theme: BaseTheme;
}
declare type SelectorColorCallback = (color: BaseThemeColors) => string;
declare type SelectorThemeCallback = (theme: BaseTheme) => string;

const selectTheme = (props: ThemeProviderProps): BaseTheme => props.theme;
const selectColors = (props: ThemeProviderProps): BaseThemeColors => selectTheme(props).colors;
const applyTheme = (selector: SelectorThemeCallback) => (props: ThemeProviderProps): string =>
  selector(selectTheme(props));
const applyColor = (selector: SelectorColorCallback) => (props: ThemeProviderProps): string =>
  selector(selectColors(props));

export default styled;
export {
  css,
  darkTheme,
  injectGlobal,
  keyframes,
  lightTheme,
  ThemeProvider,
  applyColor,
  applyTheme,
};

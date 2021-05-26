import * as sc from 'styled-components';
import { darkTheme, lightTheme } from './themes';

// eslint-disable-next-line @typescript-eslint/unbound-method
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = sc as sc.ThemedStyledComponentsModule<sc.DefaultTheme>;

interface ThemeProviderProperties {
  theme: sc.DefaultTheme;
}
declare type SelectorColorCallback = (color: sc.BaseThemeColors) => string;
declare type SelectorThemeCallback = (theme: sc.DefaultTheme) => string;

const selectTheme = (properties: ThemeProviderProperties): sc.DefaultTheme => properties.theme;
const selectColors = (properties: ThemeProviderProperties): sc.BaseThemeColors => {
  return selectTheme(properties).colors;
};
const applyTheme =
  (selector: SelectorThemeCallback) =>
  (properties: ThemeProviderProperties): string =>
    selector(selectTheme(properties));
const applyColor =
  (selector: SelectorColorCallback) =>
  (properties: ThemeProviderProperties): string =>
    selector(selectColors(properties));

export default styled;
export {
  css,
  darkTheme,
  createGlobalStyle,
  keyframes,
  lightTheme,
  ThemeProvider,
  applyColor,
  applyTheme,
};

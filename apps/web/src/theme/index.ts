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

interface ThemeProviderProperties {
  theme: BaseTheme;
}
declare type SelectorColorCallback = (color: BaseThemeColors) => string;
declare type SelectorThemeCallback = (theme: BaseTheme) => string;

const selectTheme = (props: ThemeProviderProperties): BaseTheme => props.theme;
const selectColors = (props: ThemeProviderProperties): BaseThemeColors => selectTheme(props).colors;
const applyTheme = (selector: SelectorThemeCallback) => (props: ThemeProviderProperties): string =>
  selector(selectTheme(props));
const applyColor = (selector: SelectorColorCallback) => (props: ThemeProviderProperties): string =>
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

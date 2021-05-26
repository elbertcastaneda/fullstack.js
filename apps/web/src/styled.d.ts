import 'styled-components';

declare module 'styled-components' {
  export interface BaseThemeColors {
    primary: string;
    background: string;
  }

  export interface DefaultTheme {
    colors: BaseThemeColors;
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      default: string;
    };

    colors: {
      background: {
        default: string;
        main: string;
        alt: string;
        medium: string;
      };
      accent: string;
      highlight: string;
      button: {
        default: string;
        label: string;
      };
      text: {
        default: string;
        light: string;
        highLightLabel: string;
        accent: string;
        extraLight: string;
      };
      error: string;
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      default: string;
    };

    colors: {
      background: {
        main: string;
        alt: string;
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
      };
    };
  }
}

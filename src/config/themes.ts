import { createGlobalStyle } from 'styled-components';

export const themes = {
  default: {
    font: {
      default: "'Inter', sans-serif",
    },
    colors: {
      background: {
        default: '#ffffff',
        main: '#ffffff',
        alt: '#f1f5fa',
        medium: '#ccd2d9',
      },
      accent: '#0c1c5c',
      highlight: '#fcab47',
      button: {
        default: '#0590E4',
        label: '#ffffff',
      },
      text: {
        default: '#06263F',
        light: '#908DA3',
        highLightLabel: '#ffffff',
        accent: '#fcab47',
        extraLight: '#ffffff',
      },
      error: '#c7081e',
    },
    widths: {
      default: 1100,
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background.main};
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

const breakPoints = {
  mobile: 425,
  tablet: 768,
  laptop: 1000,
  desktop: 1280,
};

const minWidth = (val: number) => `(min-width: ${val}px)`;

export const device = {
  mobile: minWidth(breakPoints.mobile),
  tablet: minWidth(breakPoints.tablet),
  laptop: minWidth(breakPoints.laptop),
  desktop: minWidth(breakPoints.desktop),
};

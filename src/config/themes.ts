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
        alt: '#FAFBFC',
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
      },
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background.main};
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

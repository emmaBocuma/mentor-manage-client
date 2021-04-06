import { ThemeProvider } from 'styled-components';
import { themes } from '../../config/themes';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

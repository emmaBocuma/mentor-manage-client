import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { themes } from '../../config/themes';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={themes.default}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

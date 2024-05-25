import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default.ts';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router.tsx';
import { CartContextProvider } from './contexts/CartProvider.tsx';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

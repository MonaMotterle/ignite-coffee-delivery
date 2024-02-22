import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default.ts';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router.tsx';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

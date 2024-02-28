import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color ${(props) => props.theme.base.text}
  }

  h1, h2, h3, h4, h5 {
    font-family: "Baloo 2", sans-serif;
    color ${(props) => props.theme.base.title};
    line-height: 130%;
    font-weight: 800;
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  h5 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

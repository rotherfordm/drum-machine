import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
body {
    --drum-machine-width: 500px;
    --gap: 1px;
    --beats: 20;
    --beat-width: calc(var(--drum-machine-width) / var(--beats) - var(--gap));
    --drum-pad-width: calc((var(--drum-machine-width) - 8 * var(--gap)) / 9);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Roboto Condensed";
    font-size: 1.5rem;
    font-weight: 700;
  }  
  
`;
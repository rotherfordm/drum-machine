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
    transition: all 0.25s linear;
    font-family: "Roboto Condensed";
    font-size: 1.5rem;
    font-weight: 700;
  }  

.drum-pad:active:before,
.q-red:before,
.w-orange::before,
.e-yellow::before,
.a-green::before,
.s-blue::before,
.d-indigo::before,
.z-purple::before,
.x-pink::before,
.c-fuchsia::before {
  top: ${({ theme }) => theme.top};
}

.drum-pad:nth-child(1):before{
  background: ${({ theme }) => theme.colorQ};
}

.drum-pad:nth-child(2):before {
  background: ${({ theme }) => theme.colorW};
}
.drum-pad:nth-child(3):before {
  background: ${({ theme }) => theme.colorE};
}
.drum-pad:nth-child(4):before {
  background: ${({ theme }) => theme.colorA};
}
.drum-pad:nth-child(5):before {
  background: ${({ theme }) => theme.colorS};
}
.drum-pad:nth-child(6):before {
  background: ${({ theme }) => theme.colorD};
}
.drum-pad:nth-child(7):before {
  background: ${({ theme }) => theme.colorZ};
}
.drum-pad:nth-child(8):before {
  background: ${({ theme }) => theme.colorX};
}
.drum-pad:nth-child(9):before {
  background: ${({ theme }) => theme.colorC};
}
  
`;
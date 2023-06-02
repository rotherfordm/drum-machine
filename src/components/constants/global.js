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
    transition: all 1s linear;
  }  

.display {
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
}

#display {
  width: ${({ theme }) => theme.width};
  height: 40px;
}

.drum-keys {
    display: 'grid';
    grid-template-columns: ${({ theme }) => theme.template};
    grid-gap: ${({ theme }) => theme.gap};
    margin-bottom: calc(var(--gap) * 4);
  }

button:hover {
  opacity: ${({ theme }) => theme.opacity};
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

.q-red,
.e-yellow,
.a-blue,
.s-indigo,
.f-pink,
.x-white,
.v-grey {
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-width: ${({ theme }) => theme.borderWidth};
  border-color: ${({ theme }) => theme.borderColor};
}


.w-orange,
.r-green,
.d-purple,
.z-fuchsia,
.c-black {
  box-shadow: ${({ theme }) => theme.boxShadowSharp};
  border-width: ${({ theme }) => theme.borderWidthSharp};
}


.drum-pad:nth-child(1):before{
  background: ${({ theme }) => theme.colorQ}
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



#do-sharp {
  right: 12px;
}

#re {
  right: 41px;
}

#re-sharp {
  right: 53px;
}

#mi {
  right: 82px;
}

#far {
  right: 67.5px;
}

#fa-sharp {
  right: 79px;
}

#sol {
  right: 109px;
}

#sol-sharp {
  right: 122px;
}

#la {
  bottom: 301px;
  left: 351px;
}

#la-sharp {
  bottom: 301px;
  left: 340px;
}

#ti {
  bottom: 301px;
  left: 310px;
}


.hide {
  display: none;
  font-weight: 2px !important;
  width: 60px;
  height: 60px;
  font-family: sans-serif !important
}

.toggle:hover + .hide {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 145px;
  color: #C53364;
  opacity: 60%;
  position: absolute;
  border: 1px #C53364 solid;
  padding: 1px;
  font-weight: bold;
  font-size: 10px;
  width: 2.5rem;
  height: 20px;
  font-family: sans-serif;
  border-radius: 10%;
  background: ${({ theme }) => theme.background};
}



.on-off,
.record,
.replay,
.play-music {
  background: none;
  color: ${({ theme }) => theme.text};
  width: 30px ;
  height: 30px;
  margin: 10px;
}

`;



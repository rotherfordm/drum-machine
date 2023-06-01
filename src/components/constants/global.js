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

#do, 
#re, 
#mi, 
#far, 
#sol,
#la,
#ti {
  width: calc((var(--drum-machine-width) - 5 * var(--gap)) / 7);
  height: 300px;
  z-index: 0;
  display: inline-block;
  gap: none !important;
  position: relative;
  background: #fff;
  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(183,183,180,0.4);
  //box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
  border:1px solid #ccc;
  border-radius:0 0 3px 3px;
  border-width:1px 2px 7px;
  
}

#do-sharp, 
#re-sharp, 
#fa-sharp, 
#sol-sharp,
#la-sharp {
  width: calc(var(--drum-pad-width - 10));
  height: 216px;
  z-index: 1;
  display: inline-block;
  gap: none !important;
  position: relative;
  background: #111;
  color: #111;
  background:-webkit-linear-gradient(-20deg,#333,#000,#333);
  border-width:1px 2px 7px;
  border-style:solid;
  border-color:#666 #222 #111 #555;
  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
  border-radius:0 0 2px 2px;
}

#do:active, 
#re:active, 
#mi:active, 
#far:active, 
#sol:active,
#la:active,
#ti:active {
  box-shadow:2px 3px 3px rgba(0,0,0,0.4);
  border-width:2px 5px 0px;
  border-style:solid;
  border-color: transparent rgba(0,0,0,0.1) transparent rgba(0,0,0,0.1);
}

#do-sharp:active, 
#re-sharp:active, 
#fa-sharp:active, 
#sol-sharp:active,
#la-sharp:active { 
  border-width:2px 3px 2px 0px;
  border-style:solid;
  box-shadow:0,0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;

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

.piano{
  -webkit-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
  border: none;
}


`;



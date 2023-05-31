import React from "react";
import { func, string } from "prop-types";
import { ReactComponent as SunIcon } from "./constants/icons/sun.svg";
import { ReactComponent as MoonIcon } from "./constants/icons/moon.svg";
import { ReactComponent as DrumIcon } from "./constants/icons/drum.svg";
import { ReactComponent as PianoIcon } from "./constants/icons/piano.svg";
import ToggleContainer from "./ToggleContainer";

/*const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};*/
const Toggle = ({ mode, toggleMode }) => {
  const isPiano = mode === "piano";
  return (
    <ToggleContainer 
    className="toggle"
     pianoMode={isPiano} onClick={toggleMode}>
      <PianoIcon />
      <DrumIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  mode: string.isRequired,
  toggleMode: func.isRequired,
};

export default Toggle;

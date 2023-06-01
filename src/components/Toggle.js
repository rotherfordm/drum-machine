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
const Toggle = (props) => {
  /*setTimeout(() => {
  props.setIsPlaying(false);
  props.setIsRecording(false);}, 450)*/  
  const toggleMode = () => {
    // if the theme is not drum, then set it to piano
    if (props.mode === "piano") {
      props.setMode("drum");
      // otherwise, it should be piano
    } else {
      props.setMode("piano");
      props.setDisplayText("")
    }
  };

  const isPiano = props.mode === "piano";
  return (
    <ToggleContainer 
     className="toggle"
     pianoMode={isPiano} 
     onClick={toggleMode}>
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

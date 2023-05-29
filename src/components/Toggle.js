import React, { useState } from "react";
import { func, string } from 'prop-types';
import { ReactComponent as SunIcon } from "./constants/icons/sun.svg";
import { ReactComponent as MoonIcon } from "./constants/icons/moon.svg";
import  ToggleContainer  from "./ToggleContainer";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer theme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
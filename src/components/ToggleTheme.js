import React, { useState } from "react";
import sun from require("./constants/icons/sun.png");
import moon from require("./constants/icons/moon.png");
import { ToggleContainer } from "./ToggleTheme.styled";



// The function that toggles between themes
 const ToggleTheme = (props) => {
    const toggle = () => {
        // if the theme is not light, then set it to dark
        if (props.theme === 'light') {
          props.setTheme('dark');
        // otherwise, it should be light
        } else {
          props.setTheme('light');
        }
          }
  return (
    <ToggleContainer onClick={toggle}>
      <i src={sun}></i>
      <i src={moon}></i> 
    </ToggleContainer>
  )
  
}


  export default ToggleTheme;
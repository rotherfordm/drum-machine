import React, { useState } from "react";


// The function that toggles between themes
export const ToggleTheme = (props) => {
    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (props.theme === 'light') {
          props.setTheme('dark');
        // otherwise, it should be light
        } else {
          props.setTheme('light');
        }
          }
  return (
    <button onClick={toggleTheme}>Toggle theme</button>
  )
}

import React from "react";



export const VolumeBar = (props) => {
  const sliderChange = (event) => {
    if (event.target.value === 0) {
      props.setDisplayText("Mute");
      props.setPower(false);
      props.setVolume(0);
    } else {
      props.setDisplayText("Volume: " + event.target.value);
      props.setPower(true);
      props.setVolume(event.target.value);
      props.setMode("volume");
    }
  };
  return (
    <input
      type="range"
      min="0"
      max="100"
      className="slider range toolbar"
      id="slider"
      step="5"
      value={props.volumeValue}
      onChange={sliderChange}
    />
  );
};

export const slider = document.getElementById(slider)



import React from "react";

const VolumeBar = (props) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      className="slider range toolbar"
      id="slider"
      step="5"
      value={props.volumeValue}
      onChange={props.sliderChange}
    />
  );
};

export default VolumeBar;

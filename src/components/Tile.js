import React from "react";

const Tile = (props) => {
  return (
    <button
      id={props.id}
      className={`drum-pad ${props.charKey}-${props.colorString} ${props.pressed}`}
      name={props.name}
    >
      <span className="name">{props.key}</span>
      <audio
        id={props.key}
        className="clip"
        type="audio/mp3"
        src={props.audioSource}
      />
    </button>
  );
};

export default Tile;

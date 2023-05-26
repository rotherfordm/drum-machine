import React from "react";

const Tile = (props) => {
  return (
    <button
      id={props.id}
      className={`drum-pad ${props.charKey}-${props.colorString} ${props.pressed}`}
      name={props.name}
      // onClick={() => {
      //   console.log("onClick");
      //   document.querySelector("#" + props.keyChar).play();
      // }}
    >
      <span className="name">{props.keyChar}</span>
      <audio
        id={props.keyChar}
        className="clip"
        type="audio/mp3"
        src={props.audioSource}
      />
    </button>
  );
};

export default Tile;

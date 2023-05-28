import React from "react";
import tiles from "./constants/tiles";

export const volumeControl = (globalVolumeVal) => {
  for (let index in tiles) {
    document.getElementById(tiles[index].keyChar).volume =
      globalVolumeVal / 100;
  }
};

export const Tile = (props) => {
  return (
    <button
      id={props.id}
      className={`drum-pad ${props.charKey}-${props.colorString} ${props.pressed}`}
      name={props.name}
      key={props.key}
      session={props.session}
      onClick={() => {
        document.querySelector("#" + props.keyChar).play();
        props.setDisplayText(props.display);
        if (props.isRecording) {
          props.setSession([...props.session, props.keyChar]);
        }
      }}
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

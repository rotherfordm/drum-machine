import React from "react";
import { drum } from "./constants/tiles";

export const volumeControl = (globalVolumeVal) => {
  for (let index in drum) {
    document.getElementById(drum[index].keyChar).volume = globalVolumeVal / 100;
  }
};

export const Pad = (props) => {
  return (
    <button
      id={props.id}
      className={`drum-pad drum ${props.charKey}-${props.colorString} ${props.pressed} ${props.keyChar}`}
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
        className={`clip ${props.keyChar}`}
        type="audio/mp3"
        src={props.audioSource}
      />
    </button>
  );
};

export const Key = (props) => {
  return (
    <button
      id={props.id}
      className={`drum-pad piano ${props.charKey}-${props.colorString} ${props.pressed} ${props.keyChar}`}
      name={props.name}
      key={props.key}
      session={props.session}
      onClick={() => {
        document.querySelector("#" + props.keyChar.toLowerCase()).play();
        props.setDisplayText(props.display);
        if (props.isRecording) {
          props.setSession([...props.session, props.keyChar]);
        }
      }}
    >
      <audio
        id={props.keyChar.toLowerCase()}
        className={`clip ${props.keyChar}`}
        type="audio/mp3"
        src={props.audioSource}
      />
    </button>
  );
};

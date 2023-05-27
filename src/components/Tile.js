import React from "react";

const Tile = (props) => {
  return (
    <button
      id={props.id}
      className={`drum-pad ${props.charKey}-${props.colorString} ${props.pressed}`}
      name={props.name}
      key={props.key}
      session={props.session}
      onClick={() => {
        document.querySelector("#" + props.keyChar).play();
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

export default Tile;

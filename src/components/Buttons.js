import React from "react";
import { volumeControl } from "./Tile";
import { tunes } from "./constants/tunes";

export const DrumButtons = (props) => {
  const startRecording = () => {
    props.setIsRecording(!props.isRecording);
    if (props.isRecording) {
      props.setSession([]);
      props.setIsPlaying(false);
    }
  };

  const handlePowerOnOff = () => {
    if (props.power) {
      props.setPower(false);
      props.setDisplayText("Mute");
      props.setVolume(0);
      volumeControl(0);
    } else {
      props.setPower(true);
      props.setDisplayText("Rock On!!");
      props.setVolume(25);
      volumeControl(25);
    }
  };

  const replayRecording = () => {
    props.setIsRecording(false);
    props.setIsPlaying(true);
  };

  return (
    <div>
      <button className="record toolbar" onClick={startRecording}>
        <i className="fa fa-record-vinyl" />
      </button>
      <button className="on-off toolbar" onClick={handlePowerOnOff}>
        <i className="fa fa-power-off" />
      </button>
      <button className="replay toolbar" onClick={replayRecording}>
        <i className="fa fa-play" />
      </button>
    </div>
  );
};

export const PianoButtons = (props) => {
  const playTune = () => {
    props.setIsPlaying(true);
    props.setSession([]);
    let randomTune = tunes[Math.floor(Math.random() * (tunes.length - 0) + 0)];
    props.setSession([...props.session, ...randomTune.notes]);
    props.setDisplayText(randomTune.title);
  };

  return (
    <button className="toolbar" onClick={playTune}>
      <i className="fa fa-music" />
    </button>
  );
};

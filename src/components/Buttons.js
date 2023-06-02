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
    for (let index = 0; index < props.session.length; index++) {
      let item = props.session[index].toUpperCase();
      setTimeout(() => {
        document.getElementById(item).play();
        props.setCharKey(item.toLowerCase());
        props.setPressed("enabled");
        if (index === props.session.length - 1) {
          setTimeout(() => {
            props.setCharKey("");
            props.setPressed("disabled");
            props.setIsRecording(false);
            props.setDisplayText("");
            props.setIsPlaying(false);
          }, 450 * index);
        }
      }, 450 * index);
    }
    props.setSession([]);
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
    /*props.setSession([...props.session,...randomTune.notes])
    console.log(props.session);*/
    let randomTuneName = randomTune.title;
    props.setDisplayText(randomTuneName);
    for (var index = 0; index < randomTune.notes.length; index++) {
      let item = randomTune.notes[index];
      setTimeout(() => { 
        document.getElementById(item.toLowerCase()).play();
        props.setCharKey(item.toLowerCase());
        props.setPressed("enabled");
        setTimeout(pause, 40 * index) 
      function pause() {
        document.getElementById(item.toLowerCase()).pause();
        document.getElementById(item.toLowerCase()).currentTime = 0 ;
      }
        if (index === randomTune.notes.length) {
          setTimeout(() => {
            props.setCharKey("");
            props.setPressed("disabled");
            props.setDisplayText("");
            props.setIsPlaying(false); 
            console.log(props.isPlaying)
          }, 500 * index);
        }
      }, 500 * index);
    }


  }

  return (
    <button className="play-music toolbar" onClick={playTune}>
      <i className="fa fa-music"/>
    </button>
  )
}
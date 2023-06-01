import React from "react";
import { volumeControl } from "./Tile";
import { tunes } from "./constants/tunes"

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
    for (var index = 0; index < props.session.length; index++) {
      let item = props.session[index].toUpperCase();
      setTimeout(() => {
        document.getElementById(item).play();
        props.setCharKey(item.toLowerCase());
        props.setPressed("enabled");
        if (index === props.session.length - 1) {
          setTimeout(() => {
            props.setCharKey("");
            props.setPressed("disabled");
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
  )
};

export const PianoButtons = (props) => {
  const playTune = () => {
    props.setIsPlaying(true);
    let randomTune = tunes[Math.floor(Math.random() * (tunes.length - 0) + 0)];
    console.log(randomTune);
    let randomTuneName = randomTune[0];
    props.setDisplayText(randomTuneName);
    for (var first = 1; first < randomTune.length; first += 2) {
      var second = first + 1;
      let firstNote = randomTune[first];
      console.log(firstNote)
      let secondNote = randomTune[second];
      console.log(secondNote)
      setTimeout(() => {
        setTimeout(() => {
        document.getElementById(firstNote.toLowerCase()).play();
        props.setCharKey(firstNote);
        props.setPressed("enabled");
        if (firstNote === randomTune.length - 1) {
          setTimeout(() => {
            props.setCharKey("");
            props.setPressed("disabled");
            props.setIsRecording(false);
            props.setDisplayText("");
            props.setIsPlaying(false);
          }, 2000 * firstNote);
        } 600 * firstNote }),
        document.getElementById(secondNote.toLowerCase()).play();
        props.setCharKey(secondNote.toLowerCase());
        props.setPressed("enabled");
        if (secondNote === randomTune.length - 1) {
          setTimeout(() => {
            props.setCharKey("");
            props.setPressed("disabled");
            props.setIsRecording(false);
            props.setDisplayText("");
            props.setIsPlaying(false);
          }, 2000 * secondNote);
        }
      },  600 * firstNote);
      
    }
    props.setSession([]);


  }

  return (
    <button className="toolbar" onClick={playTune}>
      <i className="fa fa-music"/>
    </button>
  )
}

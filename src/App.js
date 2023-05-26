import React, { useState, useEffect } from "react";
import Tile from "./components/Tile";
import VolumeBar from "./components/VolumeBar";

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [displayText, setDisplayText] = useState("Rock On!!");
  const [pressed, setPressed] = useState("enabled");
  const [power, setPower] = useState("");
  const [mode, setMode] = useState("");
  const [charKey, setCharKey] = useState("");
  const [volume, setVolume] = useState(100);
  const [session, setSession] = useState([]);

  useEffect(() => {
    const heaterOne = document.querySelector("#heater-1");
    const heaterTwo = document.querySelector("#heater-2");
    const heaterThree = document.querySelector("#heater-3");
    const heaterFour = document.querySelector("#heater-4");
    const clap = document.querySelector("#clap");
    const openHh = document.querySelector("#open-hh");
    const kickNHat = document.querySelector("#kick-n-hat");
    const kick = document.querySelector("#kick");
    const closedHh = document.querySelector("#closed-hh");

    console.log("heaterOne", heaterOne);

    const elements = [
      {
        object: heaterOne,
        class: "red-slider",
        displayText: "Heater One",
        id: "#Q",
        mode: "drum",
        key: "q",
        color: "q",
      },
      {
        object: heaterTwo,
        class: "orange-slider",
        displayText: "Heater Two",
        id: "#W",
        mode: "drum",
        key: "w",
        color: "w",
      },
      {
        object: heaterThree,
        class: "yellow-slider",
        displayText: "Heater Three",
        id: "#E",
        mode: "drum",
        key: "e",
        color: "e",
      },
      {
        object: heaterFour,
        class: "green-slider",
        displayText: "Heater Four",
        id: "#A",
        mode: "drum",
        key: "a",
        color: "a",
      },
      {
        object: clap,
        class: "blue-slider",
        displayText: "Clap",
        id: "#S",
        mode: "drum",
        key: "s",
        color: "s",
      },
      {
        object: openHh,
        class: "indigo-slider",
        displayText: "Open HH",
        id: "#D",
        mode: "drum",
        key: "d",
        color: "d",
      },
      {
        object: kickNHat,
        class: "purple-slider",
        displayText: `Kick'N'Hat`,
        id: "#Z",
        mode: "drum",
        key: "z",
        color: "z",
      },
      {
        object: kick,
        class: "pink-slider",
        displayText: "Kick",
        id: "#X",
        mode: "drum",
        key: "x",
        color: "x",
      },
      {
        object: closedHh,
        class: "white-slider",
        displayText: "Closed HH",
        id: "#C",
        mode: "drum",
        key: "c",
        color: "c",
      },
    ];

    // Create Event Handlers
    for (let index in elements) {
      const item = elements[index];
      item.object.addEventListener("click", () => {
        document.querySelector(item.id).play();
        setMode(item.mode);
        setDisplayText(displayText);
        if (isRecording === true) {
          setSession([...session, item.key]);
        }
      });
    }
  }, []);

  const startRecording = () => {};
  const handlePowerOnOff = () => {};
  const replayRecording = () => {};

  const sliderChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === 0) {
      setDisplayText("Mute");
      setPower(false);
      setVolume(0);
    } else {
      setDisplayText("Volume: " + event.target.value);
      setPower(false);
      setVolume(event.target.value);
      setMode("volume");
    }
  };

  const buttons = [
    {
      id: "heater-1",
      colorString: "red",
      keyChar: "Q",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "heater-2",
      colorString: "orange",
      keyChar: "W",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "heater-3",
      colorString: "yellow",
      keyChar: "E",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "heater-4",
      colorString: "green",
      keyChar: "A",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "clap",
      colorString: "blue",
      keyChar: "S",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "open-hh",
      colorString: "indigo",
      keyChar: "D",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "kick-n-hat",
      colorString: "purple",
      keyChar: "Z",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "kick",
      colorString: "pink",
      keyChar: "X",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "closed-hh",
      colorString: "fuchsia",
      keyChar: "C",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div id="drum-machine">
      {/* Display */}
      <div className="toolbar" id="display">
        {displayText}
      </div>
      {/* Buttons */}
      <button className="record toolbar" onClick={startRecording}>
        <i className="fa fa-record-vinyl" />
      </button>
      <button className="on-off toolbar" onClick={handlePowerOnOff}>
        <i className="fa fa-power-off" />
      </button>
      <button className="replay toolbar" onClick={replayRecording}>
        <i className="fa fa-play" />
      </button>
      {/* VolumeBar */}
      <VolumeBar sliderChange={sliderChange} />
      {/* Drum keys */}
      <div className="drum-keys">
        {buttons.map((item, index) => {
          return (
            <Tile
              key={index}
              id={item.id}
              charKey={charKey}
              colorString={item.colorString}
              pressed={pressed}
              keyChar={item.keyChar}
              audioSource={item.audioSource}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

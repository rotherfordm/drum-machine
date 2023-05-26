import React, { useState, useEffect } from "react";
import Tile from "./components/Tile";

const App = () => {
  const [pressed, setPressed] = useState("enabled");
  const [charKey, setCharKey] = useState("");

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
  }, []);

  const buttons = [
    {
      id: "heater-1",
      colorString: "red",
      key: "Q",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "heater-2",
      colorString: "orange",
      key: "W",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "heater-3",
      colorString: "yellow",
      key: "E",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "heater-4",
      colorString: "green",
      key: "A",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "clap",
      colorString: "blue",
      key: "S",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "open-hh",
      colorString: "indigo",
      key: "D",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "kick-n-hat",
      colorString: "purple",
      key: "Z",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "kick",
      colorString: "pink",
      key: "X",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "closed-hh",
      colorString: "fuchsia",
      key: "C",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div id="drum-machine">
      {/* Drum keys */}
      <div className="drum-keys">
        {buttons.map((item) => {
          return (
            <Tile
              id={item.id}
              charKey={item.charKey}
              colorString={item.colorString}
              pressed={pressed}
              key={item.key}
              audioSource={item.audioSource}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

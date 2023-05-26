import React, { useState, useEffect } from "react";
import Tile from "./components/Tile";
import VolumeBar from "./components/VolumeBar";
import tiles from "./constants/tiles";

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [displayText, setDisplayText] = useState("Rock On!!");
  const [pressed, setPressed] = useState("enabled");
  const [power, setPower] = useState(true);
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
        // document.querySelector(item.id).play();
        setMode(item.mode);
        setDisplayText(item.displayText);
        if (isRecording) {
          console.log("add record 1", session, item.key);
          console.log([...session, item.key]);
          setSession([...session, item.key]);
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      for (let index in elements) {
        const item = elements[index];
        if (key == item.key) {
          document.querySelector(item.id).play();

          if (isRecording) {
            console.log("add record 2", session, item.key);
            console.log([...session, item.key]);
            setSession([...session, item.key]);
          } else {
            setMode(item.mode);
            setDisplayText(item.displayText);
            setCharKey(item.color);
            setPressed(true);
          }
        }
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();
      for (let index in elements) {
        const item = elements[index];
        if (key == item.key) {
          setCharKey("");
          setPressed(false);
        }
      }
    });
  }, []);

  const startRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setSession([]);
      setMode("recording");
    }
  };

  const handlePowerOnOff = () => {
    if (power) {
      setPower(false);
      setDisplayText("Mute");
      setVolume(0);
      setMode("volume");
    } else {
      setPower(true);
      setDisplayText("Rock On!!");
      setVolume(25);
      setMode("volume");
    }
  };

  const replayRecording = () => {
    setIsRecording(false);
    setDisplayText("Playing");
    for (let index = 0; index < session.length; index++) {
      let item = session[index].toUpperCase();
      setTimeout(() => {
        document.getElementById(item).play();
        setCharKey(item.toLowerCase());
        setPressed(true);
        if (index === session.length - 1) {
          setTimeout(() => {
            console.log("resetting");
            setCharKey("");
            setPressed("disabled");
            setIsRecording(false);
          }, 450 * index);
        }
      }, 450 * index);
    }
    setSession([]);
  };

  const sliderChange = (event) => {
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

  console.log("session", session);

  return (
    <div>
      <div id="drum-machine">
        {isRecording ? "Recording" : null}
        <div className="flex">
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
        </div>

        {/* Drum keys */}
        <div className="drum-keys">
          {tiles.map((item, index) => {
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
    </div>
  );
};

export default App;

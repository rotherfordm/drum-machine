import React, { useState } from "react";
import { VolumeBar } from "./components/VolumeBar";
import tiles from "./components/constants/tiles";
import Elements from "./components/constants/elements";
import { Tile, volumeControl } from "./components/Tile";

const elements = Elements();

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayText, setDisplayText] = useState("Rock On!!");
  const [pressed, setPressed] = useState("enabled");
  const [power, setPower] = useState(true);
  const [mode, setMode] = useState("");
  const [charKey, setCharKey] = useState("");
  const [volume, setVolume] = useState(25);
  const [session, setSession] = useState([]);

  const startRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setSession([]);
      setMode("recording");
      setIsPlaying(false);
    }
  };

  const handlePowerOnOff = () => {
    if (power) {
      setPower(false);
      setDisplayText("Mute");
      setVolume(0);
      setMode("volume");
      volumeControl(0);
    } else {
      setPower(true);
      setDisplayText("Rock On!!");
      setVolume(25);
      setMode("volume");
      volumeControl(25);
    }
  };

  const replayRecording = () => {
    setIsRecording(false);
    setIsPlaying(true);
    for (let index = 0; index < session.length; index++) {
      let item = session[index].toUpperCase();
      setTimeout(() => {
        document.getElementById(item).play();
        setCharKey(item.toLowerCase());
        setPressed("enabled");
        if (index === session.length - 1) {
          setTimeout(() => {
            setCharKey("");
            setPressed("disabled");
            setIsRecording(false);
            setDisplayText("");
            setIsPlaying(false);
          }, 450 * index);
        }
      }, 450 * index);
    }
    setSession([]);
  };

  return (
    <div
      onKeyDown={(e) => {
        const item = elements.find((x) => x.key === e.key.toLowerCase());
        if (item) {
          document.querySelector(item.id).play();
          setCharKey(item.color);
          setPressed("enabled");
          if (isRecording) {
            setSession([...session, item.key]);
          } else {
            setMode(item.mode);
            setDisplayText(item.displayText);
          }
        }
      }}
      onKeyUp={() => {
        setCharKey("");
        setPressed("disabled");
      }}
    >
      <div id="drum-machine">
        {isRecording
          ? "Recording"
          : isPlaying
          ? "Playing"
          : "Start Making Sound"}
        <br></br>
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
          <VolumeBar
            volumeValue={volume}
            setDisplayText={setDisplayText}
            setPower={setPower}
            setVolume={setVolume}
            setMode={setMode}
          />
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
                display={item.displayText}
                setDisplayText={setDisplayText}
                pressed={pressed}
                keyChar={item.keyChar}
                audioSource={item.audioSource}
                isRecording={isRecording}
                session={session}
                setSession={setSession}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

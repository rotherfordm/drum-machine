import React, { useState } from "react";
import { VolumeBar } from "./components/VolumeBar";
import tiles from "./components/constants/tiles";
import Elements from "./components/constants/elements";
import { Tile } from "./components/Tile";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/constants/global';
import  Toggle  from './components/Toggle';
import { darkTheme, lightTheme } from "./components/constants/theme";
import Buttons from "./components/Buttons";

const elements = Elements();

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayText, setDisplayText] = useState("Rock On!!");
  const [pressed, setPressed] = useState("enabled");
  const [power, setPower] = useState(true);
  const [charKey, setCharKey] = useState("");
  const [volume, setVolume] = useState(25);
  const [session, setSession] = useState([]);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
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
          <Buttons 
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setIsRecording={setIsRecording}
          isRecording={isRecording}
          setSession={setSession}
          session={session}
          setDisplayText={setDisplayText}
          setPower={setPower}
          power={power}
          setVolume={setVolume}
          setPressed={setPressed}
          pressed={pressed}
          setCharKey={setCharKey}
          />
          {/* VolumeBar */}
          <VolumeBar
            volumeValue={volume}
            setDisplayText={setDisplayText}
            setPower={setPower}
            setVolume={setVolume}

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
        {/* Toggle Theme */}
        <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;

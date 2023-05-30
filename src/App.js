import React, { useState } from "react";
import { VolumeBar } from "./components/VolumeBar";
import tiles from "./components/constants/tiles";
import Elements from "./components/constants/elements";
import { Pad, Key } from "./components/Tile";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/constants/global';
import  Toggle  from './components/Toggle';
import { darkTheme, lightTheme, drumMode, pianoMode } from "./components/constants/theme";
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
  const [mode, setMode] = useState("drum");
  //const [theme, setTheme] = useState('light');

  /*const toggleTheme = () => {
    // if the theme is not light then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }*/

  const toggleMode = () => {
    // if the theme is not drum, then set it to piano
    if (mode === "piano") {
      setMode("drum");
      // otherwise, it should be piano
    } else {
      setMode("piano");
    }
  };

  return (
    <ThemeProvider
      /*theme={theme === 'light' ? lightTheme : darkTheme}*/
      theme={mode === "drum" ? drumMode : pianoMode}
    >
      <GlobalStyles />
      {/* Toggle Theme */}
      <div>
        <Toggle
          className="toggle"
          /*theme={theme} toggleTheme={toggleTheme} */
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
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

            {mode === "drum" ? (
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
            ) : null}

            {mode === "piano" ? <>piano</> : null}

            {/* VolumeBar */}
            <VolumeBar
              volumeValue={volume}
              setDisplayText={setDisplayText}
              setPower={setPower}
              setVolume={setVolume}
            />
          </div>
          </div>

        {/* Drum keys */}
        <div className="drum-keys">
        {mode === 'drum' ?
          tiles.map((item, index) => {
             <Pad
                key={index}
                id={item.idDrum}
                charKey={charKey}
                colorString={item.colorString}
                display={item.displayPadText}
                setDisplayText={setDisplayText}
                pressed={pressed}
                keyChar={item.keyChar}
                audioSource={item.audioSourceDrum}
                isRecording={isRecording}
                session={session}
                setSession={setSession}
              />
          }): mode === 'piano' ?
            tiles.map((item, index) => {
            <Key 
              key={index}
              id={item.idPiano}
              charKey={charKey}
              colorString={item.colorString}
              display={item.displayKeyText}
              setDisplayText={setDisplayText}
              pressed={pressed}
              keyChar={item.keyChar}
              audioSource={item.audioSourcePiano}
              isRecording={isRecording}
              session={session}
              setSession={setSession}/>
            })
          : null
        }
        </div>
        
      </div>
    </ThemeProvider>
  );
};

export default App;

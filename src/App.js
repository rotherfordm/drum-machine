import React, { useState } from "react";
import { VolumeBar } from "./components/VolumeBar";
import {drum, piano} from "./components/constants/tiles";
import Elements from "./components/constants/elements";
import { Pad, Key } from "./components/Tile";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/constants/global";
import Toggle from "./components/Toggle";
import {
  darkTheme,
  lightTheme,
  drumMode,
  pianoMode,
} from "./components/constants/theme";
import {DrumButtons, PianoButtons} from "./components/Buttons";

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

  
 
  return (
    <ThemeProvider
      /*theme={theme === 'light' ? lightTheme : darkTheme}*/
      theme={mode === "drum" ? drumMode : pianoMode}
    >
      <GlobalStyles />
      {/* Toggle Theme */}
      <div class="toggleBox">
        <Toggle
          /*theme={theme} toggleTheme={toggleTheme} */
          mode={mode}
          setMode={setMode}
          setDisplayText={setDisplayText}
          setIsPlaying={setIsPlaying}
          setIsRecording={setIsRecording}
        />
      <div className="hide">Try Me</div>
      </div>
      <div
        onKeyDown={(e) => {
          const item = elements.find((x) => x.key === e.key.toLowerCase());
          if (item) {
            if(mode === 'drum') {
             document.querySelector('#' + item.idDrum).play()
            } else if (mode === 'piano') {
              document.querySelector('#' + item.key).play()
            };
            setCharKey(item.color);
            setPressed("enabled");
            if (isRecording) {
              setSession([...session, item.key]);
            } else {
              setDisplayText(item.displayText)
              if (mode === 'piano') {
                setDisplayText("")
              };
            }
          }
        }}
        onKeyUp={() => {
          setCharKey("");
          setPressed("disabled");
        }}
      >
        <div id="drum-machine">
          <span className="display">
            {isRecording
            ? "Recording"
            : isPlaying
            ? "Playing"
            : "Start Making Sound"}
            </span>
            {/* Display */}
            <div className="flex">
            <div className="toolbar display" id="display">
              {displayText} 
            </div>
            {/* Buttons */}
            <br></br>
            {mode === "drum" ? (
              <div className="flex">
                <DrumButtons
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
            ) : null}
            {mode === "piano" ? (
                <PianoButtons 
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying}
                  setSession={setSession}
                  session={session}
                  setDisplayText={setDisplayText}
                  setPressed={setPressed}
                  pressed={pressed}
                  setCharKey={setCharKey}
                />
              )
             : null}
          </div>
      
        {/* Drum keys */}
        <div className="drum-keys">
          {mode === "drum"
            ? drum.map((item, index) => {
                return (
                  <Pad
                    mode={mode}
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
                );
              })
            : piano.map((item, index) => {
                return (
                  <Key
                    mode={mode}
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
                    setSession={setSession}
                  />
                );
              })}
        </div>
      </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.volumeRef = React.createRef();
    this.state = {
      recording: false,
      session: [],
      power: true,
      volume: 80,
      display: "Rock On!!",
      mode: "",
      color: "",
      pressed: false,
    };
  }

  componentDidMount() {
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

    for (let index in elements) {
      const item = elements[index];
      console.log("add event listener 1: " + elements[index]);
      item.object.addEventListener("click", () => {
        document.querySelector(item.id).play();
        this.setState({
          mode: item.mode,
          display: item.displayText,
        });
        if (this.state.recording == true) {
          this.setState({
            session: [...this.state.session, item.key],
          });
          this.state.session.push(item.key);
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      console.log("event keydown", event);
      console.log("add event listener 2: " + event.key);
      const key = event.key.toLowerCase();
      for (let index in elements) {
        const item = elements[index];
        if (key === item.key) {
          document.querySelector(item.id).play();
          if (this.state.recording == true) {
            this.setState({
              session: [...this.state.session, item.key],
            });
          } else {
            this.setState({
              mode: item.mode,
              display: item.displayText,
              color: item.color,
              pressed: true,
            });
          }
        }
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();
      for (let index in elements) {
        const item = elements[index];
        if (key == item.key) {
          this.setState({
            color: "",
            pressed: false,
          });
        }
      }
    });
  }

  handlePowerOnOff = () => {
    if (this.state.power == true) {
      this.setState({
        power: false,
        display: "Mute",
        volume: 0,
        mode: "volume",
      });
    } else {
      this.setState({
        power: true,
        display: "Rock On!!",
        volume: 25,
        mode: "volume",
      });
    }
    this.volumeControl();
  };

  //change the html DOM volume
  volumeControl = () => {
    document.querySelector("#Q").volume = this.state.volume / 100;
    document.querySelector("#W").volume = this.state.volume / 100;
    document.querySelector("#E").volume = this.state.volume / 100;
    document.querySelector("#A").volume = this.state.volume / 100;
    document.querySelector("#S").volume = this.state.volume / 100;
    document.querySelector("#D").volume = this.state.volume / 100;
    document.querySelector("#Z").volume = this.state.volume / 100;
    document.querySelector("#X").volume = this.state.volume / 100;
    document.querySelector("#C").volume = this.state.volume / 100;
  };

  sliderChange = (event) => {
    //change the display
    console.log(event.target.value);
    if (event.target.value == 0) {
      this.setState({
        display: "Mute",
        power: false,
        volume: 0,
      });
    } else {
      this.setState({
        volume: event.target.value,
        display: "Volume: " + event.target.value,
        mode: "volume",
        power: true,
      });
    }
    //change the display
    this.volumeControl();
  };

  startRecording = () => {
    let recording = this.state.recording ? "Rock On!!" : "Recording";
    this.setState({
      recording: !this.state.recording,
      display: recording,
    });
    if (this.state.recording == true) {
      this.setState({
        session: [],
        display: "Recording",
        mode: "recording",
      });
    }
  };

  replayRecording = () => {
    this.setState({
      display: "Playing",
      recording: false,
    });
    const session = this.state.session;
    for (let index = 0; index < session.length; index++) {
      let item = session[index].toUpperCase();
      setTimeout(() => {
        document.getElementById(item).play();
        this.setState({
          color: item.toLowerCase(),
          pressed: true,
        });
        if (index === session.length - 1) {
          setTimeout(() => {
            console.log("resetting");
            this.setState({
              color: "",
              pressed: false,
              recording: false,
            });
          }, 450 * index);
        }
      }, 450 * index);
    }
    // this.setState({
    //   session: [],
    // });
  };

  render() {
    let color = this.state.color;
    let pressed = this.state.pressed ? "enabled" : "disabled";
    // console.log("this", this);
    // console.log("this.volumeRef", Object.keys(this.volumeRef));
    // console.log("this.volumeRef", this?.volumeRef?.current?.value);

    console.log("this.state.session", this.state.session);

    return (
      <div>
        <div id="drum-machine">
          <div className="flex">
            <div className="toolbar" id="display">
              {this.state.display}
            </div>
            <button className="record toolbar" onClick={this.startRecording}>
              <i className="fa fa-record-vinyl" />
            </button>
            <button className="on-off toolbar" onClick={this.handlePowerOnOff}>
              <i className="fa fa-power-off" />
            </button>
            <button className="replay toolbar" onClick={this.replayRecording}>
              <i className="fa fa-play" />
            </button>
            <input
              ref={this.volumeRef}
              type="range"
              min="0"
              max="100"
              className="slider range toolbar"
              id="slider"
              step="5"
              // value={this.state.volume}
              onChange={this.sliderChange}
            ></input>
          </div>
          <div className="drum-keys">
            <button
              id="heater-1"
              className={`drum-pad ${color}-red ${pressed}`}
              name="Heater One"
            >
              <span className="name">Q</span>
              <audio
                id="Q"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              />
            </button>
            <button
              id="heater-2"
              className={`drum-pad ${color}-orange  ${pressed}`}
            >
              <span className="name">W</span>
              <audio
                id="W"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              />
            </button>
            <button
              id="heater-3"
              className={`drum-pad ${color}-yellow ${pressed}`}
            >
              <span className="name">E</span>
              <audio
                id="E"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              />
            </button>
            <button
              id="heater-4"
              className={`drum-pad ${color}-green  ${pressed}`}
            >
              <span className="name">A</span>
              <audio
                id="A"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              />
            </button>
            <button id="clap" className={`drum-pad ${color}-blue ${pressed}`}>
              <span className="name">S</span>
              <audio
                id="S"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              />
            </button>
            <button
              id="open-hh"
              className={`drum-pad ${color}-indigo ${pressed}`}
            >
              <span className="name">D</span>
              <audio
                id="D"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              />
            </button>
            <button
              id="kick-n-hat"
              className={`drum-pad ${color}-purple ${pressed}`}
            >
              <span className="name">Z</span>
              <audio
                id="Z"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
            </button>
            <button id="kick" className={`drum-pad ${color}-pink ${pressed}`}>
              <span className="name">X</span>
              <audio
                id="X"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              />
            </button>
            <button
              id="closed-hh"
              className={`drum-pad ${color}-fuchsia  ${pressed}`}
            >
              <span className="name">C</span>
              <audio
                id="C"
                className="clip"
                type="audio/mp3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

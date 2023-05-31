import React from "react";

const Elements = () => {
  const heaterOne = document.querySelector("#heater-1");
  const heaterTwo = document.querySelector("#heater-2");
  const heaterThree = document.querySelector("#heater-3");
  const heaterFour = document.querySelector("#heater-4");
  const clap = document.querySelector("#clap");
  const openHh = document.querySelector("#open-hh");
  const kickNHat = document.querySelector("#kick-n-hat");
  const kick = document.querySelector("#kick");
  const closedHh = document.querySelector("#closed-hh");

  return [
    {
      object: heaterOne,
      class: "red-slider",
      displayText: "Heater One",
      idDrum: "Q",
      mode: "drum",
      key: "q",
      color: "q",
    },
    {
      object: heaterTwo,
      class: "orange-slider",
      displayText: "Heater Two",
      idDrum: "W",
      mode: "drum",
      key: "w",
      color: "w",
    },
    {
      object: heaterThree,
      class: "yellow-slider",
      displayText: "Heater Three",
      idDrum: "E",
      mode: "drum",
      key: "e",
      color: "e",
    },
    {
      key: "r",
      color: "r"
    },
    {
      object: heaterFour,
      class: "green-slider",
      displayText: "Heater Four",
      idDrum: "A",
      mode: "drum",
      key: "a",
      color: "a",
    },
    {
      object: clap,
      class: "blue-slider",
      displayText: "Clap",
      idDrum: "S",
      mode: "drum",
      key: "s",
      color: "s",
    },
    {
      object: openHh,
      class: "indigo-slider",
      displayText: "Open HH",
      idDrum: "D",
      mode: "drum",
      key: "d",
      color: "d",
    },
    {
      key: "f",
      color: "f"
    },
    {
      object: kickNHat,
      class: "purple-slider",
      displayText: `Kick'N'Hat`,
      idDrum: "Z",
      mode: "drum",
      key: "z",
      color: "z",
    },
    {
      object: kick,
      class: "pink-slider",
      displayText: "Kick",
      idDrum: "X",
      mode: "drum",
      key: "x",
      color: "x",
    },
    {
      object: closedHh,
      class: "white-slider",
      displayText: "Closed HH",
      idDrum: "C",
      mode: "drum",
      key: "c",
      color: "c",
    },
    {
      key: "v",
      color: "v"
    }
  ];
};

export default Elements;

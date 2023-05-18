import logo from "./logo.svg";
import React, { Fragment, useState, useRef } from "react";
import "./App.css";

// 자식
function ChangeGreeting(props) {
  return (
    <button type="button" onClick={props.handleClick}>
      Toggle Name
    </button>
  );
}

// 부모
function Greeting(props) {
  let element;
  if (props.text) {
    element = (
      <p>
        Hello! I'm Nathan and I'm a Software Developer. Pleased to meet you!
      </p>
    );
  } else {
    element = (
      <p>Hello! I'm Jane and I'm a Frontend Developer. Pleased to meet you!</p>
    );
  }
  return (
    <div>
      {element}
      <ChangeGreeting handleClick={props.handleClick} />
    </div>
  );
}

// 조상
function ComponentStudy() {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <div>
      <Greeting
        text={textSwitch}
        handleClick={() => setTextSwitch(!textSwitch)}
      />
    </div>
  );
}

export default ComponentStudy;

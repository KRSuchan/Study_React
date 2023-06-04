import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ComponentStudy from "./ComponentStudy";
import Hansot from "./Hansot";
import { BrowserRouter } from "react-router-dom";
import Study from "./study/Study";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Study /> */}
    <Hansot></Hansot>
  </React.StrictMode>
);

reportWebVitals();

import { Timeline } from "react-twitter-widgets";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "react-twitter-widgets";
import { Navigation } from "./navigation/navigation.jsx";
// var Timeline = require('react-twitter-widgets').Timeline

function App() {
  return (
    <div className="App">
      <Navigation
        Name="navigation"
        Numbers={[1, 2, 3, 4]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

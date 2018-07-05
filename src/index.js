import { Timeline } from "react-twitter-widgets";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "react-table/react-table.css";
import "react-twitter-widgets";
import "bootstrap/dist/css/bootstrap.css";
import { Navigation } from "./navigation/navigation.jsx";
import { HomePage } from "./pages/homepage/homepage.jsx";
// var Timeline = require('react-twitter-widgets').Timeline

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-xs-4 col-md-1 panel">
          <Navigation />
        </div>
        <div className="col-xs-8 col-md-11">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

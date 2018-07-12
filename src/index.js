import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "react-table/react-table.css";
import "react-twitter-widgets";
import "bootstrap/dist/css/bootstrap.css";
import { Navigation } from "./navigation/navigation.jsx";
import { HomePage } from "./pages/homepage/homepage.jsx";
// var Timeline = require('react-twitter-widgets').Timeline
import { sidebar } from "./sidebar/sidebar.jsx";
import { SideNav } from "./sidebar/SideNav.jsx";

export withRR4  from './sidebar/withRR4.js';
export { SideNav };
export { Nav, NavIcon, NavText } from './sidebar/Nav.js';
export default SideNav;

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-xs-4-col-md-1 panel">
          <Navigation />
        </div>
        <div className="col-xs-8 col-md-11">
          <HomePage />
        </div>
        <SideNav />
      </div>
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




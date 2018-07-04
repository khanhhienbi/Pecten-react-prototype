import React from "react";
import ReactDOM from "react-dom";
import { Tweets } from "./components/tweets.jsx";
import { Analyst } from "./components/analyst.jsx";
import { Summary } from "./components/summary.jsx";
import { News } from "./components/news.jsx";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-xs-6">
            <Tweets />
          </div>
          <div className="col-xs-6">
            <Analyst />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <News />
          </div>
          <div className="col-xs-6">
            <Summary />
          </div>
        </div>
      </div>
    );
  }
}

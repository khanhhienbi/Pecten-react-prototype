import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

export class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.props.onSelected();
  }
  render() {
    return (
      <div className={"button"} onClick={this.onButtonClick}>
        {this.props.name}
      </div>
    );
  }
}

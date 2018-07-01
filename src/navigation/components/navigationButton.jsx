import React from "react";
import ReactDOM from "react-dom";

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
      <button
        className={this.props.selected ? "highlighted" : ""}
        onClick={this.onButtonClick}
      >
        {this.props.name}
      </button>
    );
  }
}

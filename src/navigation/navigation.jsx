import React from "react";
import ReactDOM from "react-dom";
import { NavigationButton } from "./components/navigationButton.jsx";
import { Row, Col, Grid } from "react-bootstrap";

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.onHomePageSelected = this.onHomePageSelected.bind(this);
    this.onMarketsSelected = this.onMarketsSelected.bind(this);
    this.onFundamentalsSelected = this.onFundamentalsSelected.bind(this);
    this.state = {
      pageSelected: "home"
    };
  }
  onHomePageSelected() {
    this.setState({
      pageSelected: "home"
    });
  }
  onMarketsSelected() {
    this.setState({
      pageSelected: "markets"
    });
  }
  onFundamentalsSelected() {
    this.setState({
      pageSelected: "fundamentals"
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <NavigationButton
            name="HomePage"
            selected={this.state.pageSelected === "home"}
            onSelected={this.onHomePageSelected}
          />
        </Row>
        <Row>
          <NavigationButton
            name="Market"
            selected={this.state.pageSelected === "markets"}
            onSelected={this.onMarketsSelected}
          />
        </Row>
        <Row>
          <NavigationButton
            name="Fundamentals"
            selected={this.state.pageSelected === "fundamentals"}
            onSelected={this.onFundamentalsSelected}
          />
        </Row>
      </Grid>
    );
  }
}

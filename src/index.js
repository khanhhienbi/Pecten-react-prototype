import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "react-table/react-table.css";

import { Navigation } from "./navigation/navigation.jsx";
import { HomePage } from "./pages/homepage/homepage.jsx";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={6} sm={4} md={1} lg={1} >
          <Navigation />
        </Col>
        <Col xs={6} sm={8} md={10} lg={10}>
          <HomePage />
        </Col>
      </Row>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




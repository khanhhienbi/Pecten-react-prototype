import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "react-highcharts";

let config = {
  chart: {
    type: "pie"
  },
  title: {
    text: "Analyst Recommendation"
  },
  xAxis: {
    categories: [
      "Siemens",
      "RWE",
      "Lufthansa",
      "Daimler",
      "Covestro",
      "BMW",
      "Adidas"
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Percentage"
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  },
  series: [
    {
      name: "John",
      data: [5, 3, 4, 7, 2]
    },
    {
      name: "Jane",
      data: [2, 2, 3, 2, 1]
    },
    {
      name: "Joe",
      data: [3, 4, 4, 2, 5]
    }
  ]
};

export class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Highcharts config={config} ref="chart" />;
  }
}

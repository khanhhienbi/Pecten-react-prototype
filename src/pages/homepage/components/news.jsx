import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";

let tabledata = [
    {
      name: "Hold",
      data: [0, 0, 0, 0, 0, 0, 0, 2.9, 0]
    },
    {
      name: "Buy",
      data: [1.7, 2.1, 2.1, 2.3, 1.9, 2.8, 2, 0, 0]
    },
    {
      name: "Sell",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 3.6]
    }
  ],
  columns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Data",
      accessor: "data" // String-based value accessors!
    }
  ];

export class News extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactTable
        data={tabledata}
        columns={columns}
        defaultPageSize={5}
        ref="chart"
      />
    );
  }
}

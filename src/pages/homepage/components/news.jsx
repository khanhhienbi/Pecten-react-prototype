import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";

let tabledata = [
    {
      name: "Bayer",
      data:
        "Bayer concludes refinancing of the Monsanto acquisition by placing bonds with a volume of 5 billion euroscow press review for June 20,2018",
      sentiment: -1
    },
    {
      name: "Deutsche Bank",
      data:
        "Broker Forecast - Deutsche Bank issues a broker note on Capita Group (The) PLC",
      sentiment: -1
    },
    {
      name: "Daimler",
      data: "Daimler Trucks North America recalls 15,000 vehicles",
      sentiment: -1
    },
    {
      name: "SAP",
      data:
        "SAP Improves Candidate Engagement and Recruiter Experience with Candidate Relationship Management",
      sentiment: -1
    },
    {
      name: "Commerzbank",
      data: "LONDON MARKET OPEN: Risk-On Trade Returns Though Berkeley Slips",
      sentiment: -1
    },
    {
      name: "BASF",
      data: "Yorkshire and Humber cluster organisations merger",
      sentiment: -1
    },
    {
      name: "Siemens",
      data:
        "US Patent Issued to Siemens on June 19 for Docking station for a wireless energy and data connection",
      sentiment: -1
    },
    {
      name: "Adidas",
      data: "Moscow press review for June 20, 2018",
      sentiment: -1
    },
    {
      name: "Deutsche Telecom",
      data: "EU mergers and takeovers (June 20)",
      sentiment: -1
    },
    {
      name: "Fresenius",
      data:
        "Dialysis Products and Services Market Expected to Increase at a CAGR 5.90% Through 2014 to 2020",
      sentiment: -1
    },
    {
      name: "Allianz",
      data:
        "Global Catastrophe Insurance Market Trends, Drivers, Strategies, Segmentation Application, Technology & Market Analysis to - New Research on Catastrophe Insurance Market till 2022: Studied in Detail by Focusing on Product Type, Application, Industry Vertical And Competitive Landscape with Top Companies",
      sentiment: -1
    },
    {
      name: "EON",
      data: "DGAP-Public Voting Rights: E.ON SE (english)",
      sentiment: -1
    }
  ],
  columns = [
    {
      Header: "Constituent",
      accessor: "name", // String-based value accessors!
      className: "left"
    },
    {
      Header: "News",
      accessor: "data", // String-based value accessors!
      width: 400
    },
    {
      Header: "Sentiment",
      accessor: "sentiment",
      Cell: row => (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#dadada",
            borderRadius: "2px"
          }}
        >
          <div
            style={{
              width: `100%`,
              height: "100%",
              backgroundColor:
                row.sentiment === -1
                  ? "#85cc00"
                  : row.sentiment === 0 ? "#ffbf00" : "#ff2e00",
              borderRadius: "2px",
              transition: "all .2s ease-out"
            }}
          />
        </div>
      )
    }
  ];

export class News extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ReactTable
          data={tabledata}
          columns={columns}
          defaultPageSize={8}
          showPageSizeOptions={false}
          ref="chart"
        />
      </div>
    );
  }
}

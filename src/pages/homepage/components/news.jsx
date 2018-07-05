import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";

let tabledata = [
    {
      name: "Bayer",
      data: "Bayer concludes refinancing of the Monsanto acquisition by placing bonds with a volume of 5 billion euroscow press review for June 20,2018"
    },
    {
      name: "Deutsche Bank",
      data: "Broker Forecast - Deutsche Bank issues a broker note on Capita Group (The) PLC"    
    },
    {
      name: "Daimler",
      data: "Daimler Trucks North America recalls 15,000 vehicles"
    },
    {
      name: "SAP",
      data: "SAP Improves Candidate Engagement and Recruiter Experience with Candidate Relationship Management"
    },
    {
      name: "Commerzbank",
      data: "LONDON MARKET OPEN: Risk-On Trade Returns Though Berkeley Slips"
    },
    {
      name: "BASF",
      data: "Yorkshire and Humber cluster organisations merger"
    },
    {
      name: "Siemens",
      data: "US Patent Issued to Siemens on June 19 for Docking station for a wireless energy and data connection"
    },
    {
      name: "Adidas",
      data: "Moscow press review for June 20, 2018"
    },
    {
      name: "Deutsche Telecom",
      data: "EU mergers and takeovers (June 20)"
    },
    {
      name: "Fresenius",
      data: "Dialysis Products and Services Market Expected to Increase at a CAGR 5.90% Through 2014 to 2020"
    },
    {
      name: "Allianz",
      data: "Global Catastrophe Insurance Market Trends, Drivers, Strategies, Segmentation Application, Technology & Market Analysis to - New Research on Catastrophe Insurance Market till 2022: Studied in Detail by Focusing on Product Type, Application, Industry Vertical And Competitive Landscape with Top Companies"
    },
    {
      name: "EON",
      data: "DGAP-Public Voting Rights: E.ON SE (english)"
    }
  ],
  columns = [
    {
      Header: "Constituent",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "News",
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

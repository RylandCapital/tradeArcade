import React from "react"
import {
  Col,
  Card,
  CardBody,
  Row,
  CardHeader
} from "reactstrap"

import tokenDictApi from 'api/v1/token-dictionary'

import PanelHeader from "components/PanelHeader/PanelHeader.js";

import icons from "variables/icons";

import {Grid} from 'react-virtualized';
import { thisExpression } from "@babel/types";


function addbutton() {
  return (

    <button class="button button1">Add Asset</button>
  );
}

function removebutton() {
  return (
    <button class="button button1">Remove Asset</button>
  );
}

function cellRenderer({columnIndex, key, rowIndex, style}) {
  return (
    <div key={key} style={style}>
      {list[rowIndex][columnIndex]}
    </div>
  );
}

function cellRenderer2({columnIndex, key, rowIndex, style}) {
  return (
    <div key={key} style={style}>
      {list2[rowIndex][columnIndex]}
    </div>
  );
}

const list = [
  ['mAAPL', addbutton(), removebutton() /* ... */],
  ['mSPY', addbutton(), removebutton() /* ... */],
  ['mQQQ', addbutton(), removebutton() /* ... */],
  // And so on...
];

const list2 = [
  ['1', 'Empty' /* ... */],
  ['2', 'Empty' /* ... */],
  ['3', 'Empty' /* ... */],
  ['4', 'Empty' /* ... */],
  ['5', 'Empty' /* ... */],
  ['6', 'Empty' /* ... */],
  ['7', 'Empty' /* ... */],
  ['8', 'Empty' /* ... */],
  ['9', 'Empty' /* ... */],
  ['10', 'Empty' /* ... */],

  // And so on...
];



class EnterContest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      tickers: []

    }

    this.fetchTickers = this.fetchTickers.bind(this)
    this.cellRenderer3 = this.cellRenderer3.bind(this)

  }

// this fetch returns a list of lists in the same format as the sample data above (const list)
  fetchTickers() {
    tokenDictApi.getTokenDict().then(apiData => {

      const list3 = []
      Object.keys(apiData[0]['token']).forEach(item=>{
        list3.push([item, addbutton(), removebutton() /* ... */])
      })

      this.setState({ tickers: list3 });
      console.log(list)
      console.log(list3)
      console.log(this.state.tickers)
    })
  }

  // this gives me an error as this.state.tickers is still undefined? even though this.fetchTickers() is run in componendDidMount()
  cellRenderer3({columnIndex, key, rowIndex, style}) {
    return (
      <div key={key} style={style}>
        {this.state.tickers[rowIndex][columnIndex]}
      </div>
    );
  }


  componentDidMount() {
    // load latest month by default
    this.fetchTickers()

  }


  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
            <Row>
            <Col md={4}>
              <Card>
                <CardHeader>
                  <h5 className="title">Choose Your Assets</h5>
                  <p className="category">
                    Which Assets Will Do The Best Over The Next Week? {" "}
                    <a href="https://alphadefi.fund/">An AlphaDefi Competition</a>
                  </p>
                </CardHeader>
                <CardBody className="all-icons">

                  <Grid
                      cellRenderer={this.cellRenderer3}
                      columnCount={this.state.tickers.length > 0 ? this.state.tickers[0].length : 0}
                      columnWidth={150}
                      height={1000}
                      rowCount={this.state.tickers.length}
                      rowHeight={50}
                      width={500}
                  />

                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardHeader>
                  <h5 className="title">Selected Assets</h5>
                  <p className="category">
                    Select 10 and Submit! {" "}
                    <a href="https://alphadefi.fund/">An AlphaDefi Competition</a>
                  </p>
                </CardHeader>
                <CardBody className="all-icons">

                  <Grid
                      cellRenderer={cellRenderer2}
                      columnCount={list2[0].length}
                      columnWidth={150}
                      height={500}
                      rowCount={list2.length}
                      rowHeight={50}
                      width={500}
                    />,

                {/*in order to submit youre wallet must be conencted (so we have address of the person entering) and all 10 must be filled out*/}
                <button class="button button1">Submit</button>
                </CardBody>
              </Card>
            </Col>
            </Row>
        </div>
      </>
    );
  }
  }
  export default EnterContest;

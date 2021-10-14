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




class EnterContest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      tickers: [],
      list2: [[1, 'Empty' /* ... */],
      [2, 'Empty' /* ... */],
      [3, 'Empty' /* ... */],
      [4, 'Empty' /* ... */],
      [5, 'Empty' /* ... */],
      [6, 'Empty' /* ... */],
      [7, 'Empty' /* ... */],
      [8, 'Empty' /* ... */],
      [9, 'Empty' /* ... */],
      [10, 'Empty' /* ... */]]
    }

    this.fetchTickers = this.fetchTickers.bind(this)
    this.cellRenderer2 = this.cellRenderer2.bind(this)
    this.cellRenderer3 = this.cellRenderer3.bind(this)
    this.addButton = this.addButton.bind(this)
    this.addClick = this.addClick.bind(this)
    this.removeButton = this.removeButton.bind(this)
    this.removeClick = this.removeClick.bind(this)

  }

  addButton(key) {
    return (
      <form onSubmit={(e) => {this.addClick(key); e.preventDefault();}}>
        <button>Add</button>
      </form>
    );
  }

  removeButton(key) {
    return (
      <form onSubmit={(e) => {this.removeClick(key); e.preventDefault();}}>
        <button>Remove</button>
      </form>
    );
  }


  fetchTickers() {
    tokenDictApi.getTokenDict().then(apiData => {

      const list3 = []
      list3.push(['ANC', this.addButton('ANC'), this.removeButton('ANC') /* ... */])
      list3.push(['MIR', this.addButton('MIR'), this.removeButton('MIR')/* ... */])
      list3.push(['STT', this.addButton('STT'), this.removeButton('STT') /* ... */])
      list3.push(['LUNA', this.addButton('LUNA'), this.removeButton('LUNA') /* ... */])
      list3.push(['MINE', this.addButton('MINE'), this.removeButton('MINE') /* ... */])
      Object.keys(apiData[0]['token']).forEach(item=>{
        list3.push([item, this.addButton(item), this.removeButton(item) /* ... */])
      })

      this.setState({ tickers: list3 });
      console.log(this.state.tickers)

    })
  }

  cellRenderer2({columnIndex, key, rowIndex, style}) {
    return (
      <div key={key} style={style}>
        {this.state.list2[rowIndex][columnIndex]}
      </div>
    );
  }
  

  cellRenderer3({columnIndex, key, rowIndex, style}) {
    return (
      <div key={key} style={style}>
        {this.state.tickers[rowIndex][columnIndex]}
      </div>
    );
  }

  componentDidMount() {
    this.fetchTickers()
  }

  addClick(key) {
    
    console.log(key);

    //get current top 10
    let current = []
    this.state.list2.forEach(item => {
      current.push(item[1])

      }
    )

    //check if key is already in array
    let flag = current.includes(key)

    //add if not 
    let added = false
    this.state.list2.forEach(item => {
      if (item[1] === 'Empty' && flag === false && added === false ) {

      let assets = [...this.state.list2];
      let asset = [...assets[item[0]-1]]
      console.log(asset)

      asset[1] = key
      console.log(asset)
      assets[item[0]-1] = asset
      console.log(assets)
      
      this.setState({ list2: assets }, function () {
        console.log(this.state.list2);
      });

      added=true

      }

    })

    this.theGrid.forceUpdate()
  }

  removeClick(key) {
    console.log(key);
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
                      height={800}
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
                      ref={(ref) => this.theGrid = ref}
                      cellRenderer={this.cellRenderer2}
                      columnCount={this.state.list2[0].length}
                      columnWidth={150}
                      height={500}
                      rowCount={this.state.list2.length}
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
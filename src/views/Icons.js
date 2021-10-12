/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import icons from "variables/icons";

import {Grid} from 'react-virtualized';



/*.button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}


.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

.button2 {
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
}

.button2:hover {
  background-color: #008CBA;
  color: white;
}*/



const fetchTickers = () => {
  const data =  fetch(
    "https://api.alphadefi.fund/info/tokendict"
  );
  items = []
  Object.keys(data['token']).forEach(key =>
    items.Push([data[key], addbutton(), removebutton() /* ... */])
  )
  return items
};


// Grid data as an array of arrays
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


class EnterContest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  
  
  }


  
 componentDidMount() {
    // load latest month by default
   

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
               
                {/*<Grid
                    cellRenderer={cellRenderer}
                    columnCount={this.tickers[0].length}
                    columnWidth={150}
                    height={1000}
                    rowCount={this.tickers.length}
                    rowHeight={50}
                    width={500}
                />,*/}
                
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

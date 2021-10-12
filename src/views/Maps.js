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
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {AgGridColumn, AgGridReact} from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'



const fetchStats = () => {
  return fetch(
    "https://api.alphadefi.fund/historical/spreadhiststats"
  );
};

class Tracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowData: [],
    }
  
    this.fetchData = this.fetchData.bind(this);
  }

async fetchData() {
  const response = await fetchStats();
  const data = await response.json();
  
  console.log(data)
  this.setState({ rowData: data });
}

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;

  console.log(">> onGridReady");
  this.fetchData();
  this.gridApi.sizeColumnsToFit();
}

render() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>Track Your Portfolios</CardHeader>
              <CardBody>
              <div className="ag-theme-alpine" style={{height: 800}}>
              <AgGridReact
               onGridReady={this.onGridReady.bind(this)}
               rowData={this.state.rowData}>
                <AgGridColumn field="symbol" sortable={true} filter={true} resizable={true} ></AgGridColumn>
                <AgGridColumn field="mean" sortable={true} filter={true} resizable={true}  ></AgGridColumn>
                <AgGridColumn field="Three SD" sortable={true} filter={true} resizable={true} ></AgGridColumn>
                <AgGridColumn field="Neg Three SD" sortable={true} filter={true}  resizable={true}></AgGridColumn>
                <AgGridColumn field="max" sortable={true} filter={true}  resizable={true}></AgGridColumn>
                <AgGridColumn field="min" sortable={true} filter={true}  resizable={true} ></AgGridColumn>
                <AgGridColumn field="std" sortable={true} filter={true}  resizable={true} ></AgGridColumn>
                <AgGridColumn field="Historical 5th % Spread" sortable={true} filter={true}  resizable={true}></AgGridColumn>
                <AgGridColumn field="Historical 95th % Spread" sortable={true} filter={true}  resizable={true}></AgGridColumn>
            </AgGridReact>
              </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
}
export default Tracker;

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
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <PanelHeader
        size="sm"
      />
      <div className="content">
        <Row>
          <Col xs={12} md={6}>
            
            
            
            
            <Card >
              <CardHeader>
                <h5 className="card-category">AlphaDefi Terra Absolute Return Contest</h5>
                <CardTitle tag="h4">Rules - Fantasy Terra</CardTitle>
              </CardHeader>
              <CardBody>
                <div >
                  <Table>
                      <tr>
                        <td> 
                        <span class="badge badge-neutral">Select</span>
                        </td>
                        <td >
                          Select 10 Terra Assets at the Start of the Week.
                        </td>
                      </tr>
                      <tr>
                        <td> 
                        <span class="badge badge-neutral">Track</span>
                        </td>
                        <td >
                          Track Performance Throughout the Week.
                        </td>
                      </tr>
                      <tr>
                        <td> 
                        <span class="badge badge-neutral">Win</span>
                        </td>
                        <td >
                          Win Prizes by Being in the Top 10.
                        </td>
                      </tr>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>








          <Col xs={12} md={6}>
            <Card>
              <CardHeader>
                <h5 className="card-category">Payout Information</h5>
                <CardTitle tag="h4">Schedule </CardTitle>
                <h5 className="card-category">** Could Change Next Week Based on Number of Players</h5>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Rank</th>
                      <th>Pool Payout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1st</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>2nd</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>3rd-5th</td>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <td>6th-10th</td>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <td>11th-20th</td>
                      <td>1%</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

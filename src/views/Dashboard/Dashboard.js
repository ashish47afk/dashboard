import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Dash from "assets/css/dashboard.css";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {Bar} from 'react-chartjs-2';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: '% Stock Sold',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 3,
      data: [73, 64, 76, 59, 48, 51, 49, 78, 54, 78, 88, 92]
    }
  ]
}

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={10} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <div className="own">
                <p className={classes.cardPara}>Reviews</p>
              </div>
              <p className={classes.cardCategory}><MoreVertIcon /></p>
              <div className="title">
              <h3 className={classes.cardTitle}>
                1,281
              </h3>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={10} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
            <div className="own">
                <p className={classes.cardPara}>AV. Rating</p>
              </div>
              <p className={classes.cardCategory}><MoreVertIcon /></p>
              <div className="title">
              <h3 className={classes.cardTitle}>
                4.6 
              </h3>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={10} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
            <div className="own">
                <p className={classes.cardPara}>Sentiment Analysis</p>
              </div>
              <p className={classes.cardCategory}><MoreVertIcon /></p>
              <div className="title">
              <h3 className={classes.cardTitle}>
                5
              </h3>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
            <Bar
          data={state}
          width={70}
          height={20}
          options={{
            ticks: { min: 0 },
            title:{
              display:true,
              text:'Stock Sold Monthly',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
            </CardHeader>
            <CardBody>
            </CardBody>
            <CardFooter chart>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

// Component 
import UpcomingProject from './Dashboard/UpcomingProject';
import CurrentProject from './Dashboard/CurrentProject';
import CompletedProject from './Dashboard/CompletedProject';
import ProjectAllocation from './Dashboard/ProjectAllocation';
import PlannedLeave from './Dashboard/PlannedLeave';
import ScrumReport from './Dashboard/ScrumReport';

// Component End

// Allocation data

const allocationData=[
  {
  _id:"124345",
  name:"Gins P Cyriac",
  status: "Billable",
  dateStart:"22nd Feb,2018",
  dateEnd:"20th March 2019",
  projectName:"SAP"
},
{
  _id:"124346",
  name:"Pranjul Sachan",
  status: "Billable",
  dateStart:"22nd Feb,2018",
  dateEnd:"20th March 2019",
  projectName:"Corda Poc"
},
{
  _id:"124347",
  name:"Shyam Pratap Singh",
  status: "Free",
  dateStart:"22nd Feb,2018",
  dateEnd:"20th March 2019",
  projectName:"NA"
},
{
  _id:"124348",
  name:"Aditi",
  status: "Billable",
  dateStart:"22nd Feb,2018",
  dateEnd:"20th March 2019",
  projectName:"Milliu"
},
]

// End allocation data

// Leave Data
const leaveData=[
  {
_id:"123",
name:"Shyam",
leaveStartDate:"30 May, 2018",
leaveEndDate:"6th June, 2018"
},
{
  _id:"124",
  name:"Gins",
  leaveStartDate:"14 May, 2018",
  leaveEndDate:"19th May, 2018"
  }
]

// Leave End Data

// ScrumData

const scrumData=[
  {
_id:"12345",
projectName:"SAP",
sprintNumber:4,
productBacklog:65,
targetedUserStories:6,
sprintEndDate:"21st March,2018",
scrumMaster:"Deepak Gera"
  },
  {
    _id:"12346",
    projectName:"Force Field",
    sprintNumber:4,
    productBacklog:65,
    targetedUserStories:6,
    sprintEndDate:"21st March,2018",
    scrumMaster:"Deepak Gera"
      },
      {
        _id:"12347",
        projectName:"BLaas",
        sprintNumber:4,
        productBacklog:65,
        targetedUserStories:6,
        sprintEndDate:"21st March,2018",
        scrumMaster:"Deepak Gera"
          }
]



const style={
  instanceCountStyle:{
    height:"100px",
    width:"320px",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5",
    align:"center"
  },
  instanceProjectStyle:{
    height:"100px",
    width:"320px",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5",
    align:"center",
    marginLeft:"70px"
  },
  CloudChartStyle:{
    height:"400px",
    marginTop:"50px",
    width:"auto", 
    borderRadius: "6px",
    border: "solid 1px #d5d5d5"
  },
  platFormStyle:{
    height:"400px",
    marginLeft:"20px",
    marginTop:"50px",
    width:"auto",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5",
    marginLeft:"95px"
  },
  scrumReport:{
    height:"400px",
    marginTop:"50px",
    width:"1100px",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5"
  }
}



export default class Home extends React.Component {
  
  render() {
  
      return (
        <div className="landingBackground">
        <Grid style={{marginTop:"90px"}}>  
    <Row> 
      <Col xs={4} style={style.instanceCountStyle} >
      
     <UpcomingProject />
      </Col>
      <Col xs={4} style={style.instanceProjectStyle}>
    
      <CurrentProject />
      </Col>
      <Col xs={4} style={style.instanceProjectStyle}>
    
      <CompletedProject />
      </Col>
      </Row>
      <Row>
      <Col xs={8} style={style.CloudChartStyle}>
     <ProjectAllocation allocationData={allocationData}/>
      </Col>
      <Col xs={4} style={style.platFormStyle}>
      <PlannedLeave leaveData={leaveData}/>
      </Col>
      </Row>

      <Row>
      <Col xs={12} style={style.scrumReport}>
      <ScrumReport scrumData={scrumData}/>
      </Col>
        </Row>
           
          </Grid>
          </div>
      )
    }
  }




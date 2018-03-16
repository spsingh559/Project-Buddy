import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import UpcomingProjectsMain from './UpcomingProjectsMain';

const projectData=[
    {
        _id:"23423",
        projectName:"Corda Poc",
        catagory:"Upcoming",
        projectDescription:" It is Corda Based application design to address public and private network issue",
        teamMates:['Gins P Cyriac', 'Divya', 'Poornima', 'Shyam', 'Deepak Gera'],
        ScrumMaster:"Deepak Gera",
        projectManager:"Deepak Gera",
        projectStartDate:'17th March, 2018',
        projectEndDate:'23rd April, 2018'
    },
    {
        _id:"23424",
        projectName:"BLaas",
        catagory:"Ongoing",
        projectDescription:" It is providing blckchain Lab as a service",
        teamMates:['Ajay', 'Dimple', 'Shyam',  'Prashant', 'Hitarshi'],
        ScrumMaster:"Hitarshi",
        projectManager:"Hitarshi",
        projectStartDate:'12th Feb, 2018',
        projectEndDate:'23rd April, 2018'
    },
    {
        _id:"23425",
        projectName:"Force Field",
        catagory:"Completed",
        projectDescription:" Multichannel based trading application",
        teamMates:['Gins P Cyriac', 'Pranjul', 'Dimple', 'Shyam', 'Deepak Gera'],
        ScrumMaster:"Deepak Gera",
        projectManager:"Deepak Gera",
        projectStartDate:'10th Feb, 2018',
        projectEndDate:'19th Feb, 2018'
    },

]
export default class UpcomingProjects extends React.Component{

    render(){
        return(
        <div style={{marginTop:"65px"}} className="upcomingBackground">
        <Grid>
            <center>
            <h2> Upcoming Projects Details </h2>
            </center>
            <UpcomingProjectsMain projectData={projectData}/>
            </Grid>
            </div>
        )
            
    }
}
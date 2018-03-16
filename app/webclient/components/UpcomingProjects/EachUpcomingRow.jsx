import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style={
    projectBrief:{
    borderRadius: "6px",
    border: "solid 1px #d5d5d5"
    }
}
export default class EachUpcomingRow extends React.Component{

    render(){
        let arr=[];
        this.props.data.teamMates.forEach((data)=>{
            arr.push(<Chip
               style={{marginTop:"10px"}}
              
              >
                <Avatar src="./../../images/userIcon.png" />
                {data}
              </Chip>)
        })
        return(
           
            <Card style={{marginTop:"30px"}}>
    <CardHeader
      title={this.props.data.projectName}
      subtitle={this.props.data.projectDescription}
      actAsExpander={true}
      showExpandableButton={true}
    />
    
    <CardText expandable={true}>
      <Row>
          <Col xs={8}>
          <h3> Team Mates</h3>
          {arr}
          </Col>
          <Col xs={4} style={style.projectBrief}>
          
          <h3> Projects Brief Detail </h3>
          <br />
           <h4>Start Date : {this.props.data.projectStartDate} </h4>
           <h4> End Date : {this.props.data.projectEndDate} </h4>
           <h4> Project Manager : {this.props.data.projectManager} </h4>
           <h4> Scrum Master: {this.props.data.ScrumMaster} </h4>
           
          </Col>
          </Row>
    </CardText>
  </Card>
        )
    }
}
import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import {Row,Col} from 'react-bootstrap';
export default class EachLeaveRow extends React.Component{

    render(){
        return(
            <Row style={{marginTop:"10px"}}>
                <Col xs={4} >
                <Chip
          
        >
          <Avatar src="images/userIcon.png" />
          {this.props.data.name}
        </Chip>
                </Col>
                <Col xs={8} >
                <Chip
         
        >
         {this.props.data.leaveStartDate} - {this.props.data.leaveEndDate}
        </Chip>

                </Col>
                </Row>
                
        )
    }
}
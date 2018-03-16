import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";
import {Row,Col} from 'react-bootstrap';

import EachLeaveRow from './EachLeaveRow';


export default class PlannedLeave extends React.Component{

    render(){
        let newData=this.props.leaveData.map((data)=>{
            return(
                <EachLeaveRow 
                key={data._id}
                data={data}
                />
            )
        })
        return(
            <div >
                 <center><h3>Planned Leave </h3></center>
            {newData}
                         </div>
        )
    }
}
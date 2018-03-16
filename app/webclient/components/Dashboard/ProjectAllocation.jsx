import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";
import {Row,Col,Table} from 'react-bootstrap';
import EachAllocationRow from './EachAllocationRow';



export default class ProjectAllocation extends React.Component{

    render(){
        console.log(this.props.allocationData);

        let newData= this.props.allocationData.map((data,i)=>{
            return(
                <EachAllocationRow 
                key={data._id}
                data={data}
                i={i}
                />
            )
        })
        return(
            <div>
                <center>
                <h2>Project Allocation Data </h2>
                </center>
            <Table bordered >
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Project Name</th>
              </tr>
            </thead>
            <tbody>
                {newData}
                </tbody>
                </Table>
                </div>
        )
    }
}
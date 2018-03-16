import React from 'react';
import {Table} from 'react-bootstrap';
import EachReportDetailRow from './EachReportDetailRow';
export default class ScrumDetail extends React.Component{

    render(){
        console.log(this.props.scrumData.status);
        let newData=this.props.scrumData[0].status.map((data,i)=>{
            return(
                <EachReportDetailRow 
                key={i}
                data={data}
                i={i}
                />
            )
        })

        return(
            <div>
              
                 <center><h3>Scrum Detail Report </h3></center>
            
            <Table bordered >
       <thead>
         <tr>
           <th>Work Assigned</th>
           <th>Work Detail</th>
           <th>Start Date</th>
           <th>End Date </th>
           
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
import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";
import {Row,Col,Table} from 'react-bootstrap';
import EachScrumRow from './EachScrumRow';



export default class ScrumReport extends React.Component{

    render(){

        let newData= this.props.scrumData.map((data,i)=>{
            return(
                <EachScrumRow 
                key={data._id}
                data={data}
                i={i}
                />
            )
        })

        return(
            <div >
                 <center><h3>ScrumReport </h3></center>
            
                 <Table bordered >
            <thead>
              <tr>
        
                <th>Index</th>
                <th>Project Name</th>
                <th>Sprint Number</th>
                <th>Product Backlog</th>
                <th>Targeted UserStories</th>
                <th>Sprint EndDate </th>
                <th>scrumMaster </th>
                
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
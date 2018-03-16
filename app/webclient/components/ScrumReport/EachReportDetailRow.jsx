import React from 'react';

export default class EachReportDetailRow extends React.Component{

    render(){

        let arr=[];
// console.log( this.props.data.status);
        // this.props.data.status.forEach((data)=>{

        //     arr.push(
                
        //         <td>{data}</td>
                
        //     )
        // })
       
        return(
            <tr>

               
                <td>{this.props.data.name}</td>
                <td>{this.props.data.work}</td>
                <td>{this.props.data.startDate}</td>
                <td>{this.props.data.endDate}</td>
              
                </tr>
        )
    }
}
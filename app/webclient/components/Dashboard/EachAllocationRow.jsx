import React from 'react';

export default class EachAllocationRow extends React.Component{

    render(){

        return(
            <tr>
                <td>{this.props.i}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.status}</td>
                <td>{this.props.data.dateStart}</td>
                <td>{this.props.data.dateEnd}</td>
                <td>{this.props.data.projectName}</td>
                </tr>
        )
    }
}
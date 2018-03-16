import React from 'react';

export default class EachScrumRow extends React.Component{

    render(){

        return(
            <tr>

                <td>{this.props.i}</td>
                <td>{this.props.data.projectName}</td>
                <td>{this.props.data.sprintNumber}</td>
                <td>{this.props.data.productBacklog}</td>
                <td>{this.props.data.targetedUserStories}</td>
                <td>{this.props.data.sprintEndDate}</td>
                <td>{this.props.data.scrumMaster}</td>
                </tr>
        )
    }
}
import React from 'react';

import ScrumDetail from './ScrumDetail';

const scrumData=[
    {
        _id:"1232",
        projectName:"Corda Poc",
        status:[
            {name:"shyam",
        work:"working on Design Part",
    startDate:"14th March 2018",
    endDate:"16th March 2018"},

    {name:"Gins",
        work:"working on Corda Part",
    startDate:"14th March 2018",
    endDate:"16th March 2018"}
        ]
    },
    {
        _id:"1233",
        projectName:"Force Field",
        status:[
            {name:"Gins",
        work:"working on Corda Part",
    startDate:"14th March 2018",
    endDate:"16th March 2018"},
    {name:"shyam",
        work:"working on Design Part",
    startDate:"14th March 2018",
    endDate:"16th March 2018"}
        ]
    }
]
export default class ScrumReportMain extends React.Component{

    render(){

        return(
            <div style={{marginTop:"65px"}} className="upcomingBackground">
                <ScrumDetail scrumData={scrumData} />
                </div>
        )
    }
} 
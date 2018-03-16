import React from 'react';
import ReactSvgPieChart from "react-svg-piechart"
import {Row,Col} from 'react-bootstrap';


export default class CurrentProject extends React.Component{
    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    

    render(){
        return(
           
            <div >
            <h3>Current Project : 6</h3>
              </div>
        )
    }
}
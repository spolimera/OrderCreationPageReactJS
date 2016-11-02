/*
Activity Indicator
*/
import React, {Component} from 'react';
const Spinner = require('react-spinkit');
require('./ActivityIndicator.less');

export default class ActivityIndicator extends Component{

  render(){
    return(
      <div>
        <Spinner spinnerName='double-bounce' noFadeIn/>
      </div>
    );
  }
}

import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './reducers/mapping';
import Home from './containers/Home';
import OrderDetails from './containers/OrderDetails';

class Routes extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={Home}/>
          <Route path="/orderDetails" component={OrderDetails}/>
        </Route>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

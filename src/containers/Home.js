import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../reducers/mapping';
import ActivityIndicator from '../components/ActivityIndicator';
import OrderCreationPage from './OrderCreationPage';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {loadSpinner: false}
  }

  componentDidMount(){
    this.props.initialProductsLoad();
  }

  loadActivityIndicator(){
    return <ActivityIndicator/>
  }

  loadOrderCreationPage(){
    return <OrderCreationPage/>
  }

  render(){
    return(
      <div className="home">

        {this.loadOrderCreationPage()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

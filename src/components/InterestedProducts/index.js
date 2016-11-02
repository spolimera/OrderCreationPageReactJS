require('./InterestedProducts.less');
import {hashHistory} from 'react-router';

import React, {Component} from 'react';

export default class InterestedProducts extends Component{
    constructor(props){
      super(props);
    }

    selectedProducts(){
      this.props.createOrder(this.props.selectedProducts, (result) => {
          hashHistory.push('/orderDetails');
      });
    }

    render(){
      return(
          <div><span className="table-description"> Your interested products... </span>
            <table className="product-table">
              <br/>
              <tr className="table-header"> <th>Name</th> <th>Code</th> <th>Count</th></tr>
              {this.props.selectedProducts.map((product) => {
                  return(
                     product.count > 0 && <tr className="table-row"><td>{product.Name}</td> <td>{product.code}</td> <td>{product.count}</td></tr>
                  );
              })}
            </table>
            <br/>
            <button onClick={() => this.selectedProducts()}>Create Order</button>
          </div>
      );
    }
}

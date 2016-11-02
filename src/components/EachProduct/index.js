require('./EachProduct.less');
import React, {Component} from 'react';
import * as SelectedProducts from '../../utils/SelectedProductUtils';

export default class EachProduct extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: this.props.product.count
    }
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(){
    this.setState(
      {
        count: this.state.count + 1
      },
      SelectedProducts.handleSelectedProduct(this.props.product, this.state.count+1, this.props.selectedProducts, this.props.productSelected)
  );

  }

  onDecrement(){
    this.setState(
      {
        count: this.state.count - 1
    },
    SelectedProducts.handleSelectedProduct(this.props.product, this.state.count-1, this.props.selectedProducts, this.props.productSelected)
   );

  }

  render(){
    return(
      <div className="col-md-3 col-sm-4 col-xs-6 text-center ">

        <div>
          <img src={this.props.product.play2win__Img__c} className="prodImg"/>
        </div>

        <div>
          <span className="prodName">{this.props.product.Name}<br/> ({this.props.product.play2win__Code__c})</span>
        </div>

        <div>
          <button type="button" className="btn btn-default btn-xs" onClick={ () => this.onDecrement()} disabled={this.state.count === 0}>
            -
          </button>{'  '+this.state.count+'  '}
          <button type="button" className="btn btn-default btn-xs" onClick={ () => this.onIncrement()} disabled={this.state.count === 10}>
          +
          </button>
        </div>

      </div>
    );
  }
}

require('./ProductsList.less');
import React, {Component} from 'react';
import EachProduct from '../EachProduct';
import * as FilterProducts from '../../utils/FilterProductsUtil';

export default class ProductsList extends Component{
  constructor(props){
    super(props);
    this.state = { productslist: []};
  }

  componentWillReceiveProps(newProps){
    this.setState({productslist: FilterProducts.applyFilter(newProps.products, newProps.searchText, newProps.selectedProducts)});
  }

  render(){
    return(
      <div className="row">
        {this.state.productslist !== '' ? this.state.productslist.map((product) => {
          return <EachProduct
                      product={product}
                      key={product.play2win__Code__c}
                      productSelected={this.props.productSelected}
                      selectedProducts={this.props.selectedProducts}/>
        }) :  <span><br/><br/>No products found...</span>}
      </div>
    );
  }
}

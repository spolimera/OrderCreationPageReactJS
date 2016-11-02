require('./container.less');
import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import ProductsList from '../components/ProductsList';
import InterestedProducts from '../components/InterestedProducts';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../reducers/mapping';

class OrderCreationPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>

          <div className="header row navbar">
            <SearchBar searchText={this.props.state.Products.searchText} searchTextEntered={this.props.searchTextEntered}/>
          </div>

          <div className="container">
            <div className="content row">
              <div className="content-left col-md-3">
                {this.props.state.SelectedProducts.selectedProducts.length > 0 && <InterestedProducts
                    selectedProducts={this.props.state.SelectedProducts.selectedProducts}
                    createOrder={this.props.createOrder}
                    />}
              </div>

              <div className="content-right col-md-9 panel">
                <ProductsList
                      products={this.props.state.Products.products}
                      searchText={this.props.state.Products.searchText}
                      selectedProducts={this.props.state.SelectedProducts.selectedProducts}
                      productSelected={this.props.productSelected}
                      />
              </div>
            </div>

          </div>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreationPage);

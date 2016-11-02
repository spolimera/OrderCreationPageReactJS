'use strict';

import { bindActionCreators } from 'redux';

import * as SelectedProductsActions from './selectedproducts/actions';
import * as ProductsActions from './products/actions';

export function mapStateToProps(state){
    return {state: state}
}

export function mapDispatchToProps(dispatch){
    return bindActionCreators({
      ...SelectedProductsActions,
      ...ProductsActions
      }, dispatch);
}

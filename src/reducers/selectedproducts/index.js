import * as types from './types';

const initialState = {
  selectedProducts: [],
  order: ''
}

export default function SelectedProducts(state = initialState, action = {}){
    switch (action.type) {
      case types.PRODUCT_SELECTED:
        return {
          selectedProducts: action.products
        }
      case types.ORDER_CREATION_SUCCESS:
        return {
          ...state,
          order: action.order
        }

      default: state
    }
    return state;
}

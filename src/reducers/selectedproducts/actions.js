import * as types from './types';

export function productSelected(myProducts){
  return dispatch => {
    dispatch(updatedSelectedProducts(myProducts));
  }
}

export function createOrder(myProducts, successCallBack){
  return dispatch => {
    play2win.OrderCreationPageController.createOrder(myProducts, (result, event) => {
        if(event.status){
          console.log('** OrderIS: '+result);
          dispatch(orderCreatedSuccess(result));
          successCallBack && successCallBack(result);
        }
    }, {buffer: false, escape: true, timeout: 30000});
  }
}

function updatedSelectedProducts(myProducts){
  return{
    type: types.PRODUCT_SELECTED,
    products: myProducts
  }
}

function orderCreatedSuccess(myOrder){
  return{
    type: types.ORDER_CREATION_SUCCESS,
    order: myOrder
  }
}

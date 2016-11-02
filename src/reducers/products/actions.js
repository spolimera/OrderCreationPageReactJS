 /*
 Actions for products
 */
import * as types from './types';

export function initialProductsLoad(successCallback, errorCallback){
  console.log('method called');
  return dispatch => {
    /*let products = [    {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT1'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE1'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT2'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE2'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT3'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE3'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT4'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE4'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT5'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE5'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT6'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE6'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT7'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE7'
                        },
                        {
                          Name: 'Sprite',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/SpriteLata.png',
                          play2win__Code__c: 'SPRT8'
                        },
                        {
                          Name: 'CocaCola',
                          play2win__Img__c: 'http://www.distribuidoracob.com.br/wp-content/uploads/2013/08/CocaCola.png',
                          play2win__Code__c: 'COKE8'
                        }
                      ];
    //dispatch(productsLoadSuccess(products));
    */
    play2win.OrderCreationPageController.loadAllProducts((response, event) => {

      if(event.status){

          dispatch(productsLoadSuccess(response));
          //successCalback && succssCallback();
      }else{

          dispatch(productsLoadFail(response.error));
          //errorCallback && errorCallback();
      }

    }, {buffer: false, escape: true, timeout: 30000});
  }
}

export function searchTextEntered(mySearchText){
  return dispatch => {
    dispatch(searchText(mySearchText));
  }
}

function productsLoad(){
  return{
    type: types.LOAD_SOBJECTS,
  }
}

function productsLoadSuccess(records){
  return {
    type: types.LOAD_SUCCESS,
    products: records
  }
}

function productsLoadFail(error){
  return{
    type: types.LOAD_FAILED,
    error: error
  }
}

function searchText(mySearchText){
  return{
    type: types.SEARCH_TEXT_ENTERED,
    searchText: mySearchText
  }
}

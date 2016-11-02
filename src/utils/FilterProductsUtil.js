import * as SelectedProducts from './SelectedProductUtils';

export function applyFilter(productsList, searchText, selectedProducts){
    var products = [];

    productsList.map((product) => {
        if(product.Name.toLowerCase().indexOf(searchText.toLowerCase()) === -1 && product.play2win__Code__c.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
          return;
        }
        product.count = SelectedProducts.getProductCount(product, selectedProducts);
        products.push(product);
    });

    return products;
}

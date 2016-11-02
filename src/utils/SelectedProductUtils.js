

export function handleSelectedProduct(product, count, selectedProducts, productSelected){

    var productIndex = selectedProducts.findIndex((element, index, array) => {
      return element.code === product.play2win__Code__c;
    });

    if(productIndex === -1){
      var prod = {};
      prod.code = product.play2win__Code__c;
      prod.count = count;
      prod.Name = product.Name;
      prod.Id = product.Id;
      selectedProducts.push(prod);
    }else{
      selectedProducts[productIndex].count = count;
    }

    productSelected(selectedProducts);
}

export function getProductCount(product, mySelectdProducts){

  var prod = mySelectdProducts.find((element) => {
      return element.code === product.play2win__Code__c;
  });

  if(prod !== undefined){
    return prod.count;
  }

  return 0;
}

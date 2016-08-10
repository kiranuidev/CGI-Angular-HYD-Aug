angular.module("products")
    .factory("productFact", [function () {

        var factObj = {};
        var cartProducts=[];
        factObj.addProductToCart= function(item){
            cartProducts.push(item);
        };
        
        factObj.getProductsForCart= function(){
          return cartProducts;  
        };

        return factObj;


    }]);

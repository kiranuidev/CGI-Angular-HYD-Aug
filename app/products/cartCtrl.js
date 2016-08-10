angular.module("products")
    .controller("cartCtrl", ["$scope", "productsSvc",
                                 function ($scope, productsSvc) {

            var products = productsSvc.getCartProducts()


}]);

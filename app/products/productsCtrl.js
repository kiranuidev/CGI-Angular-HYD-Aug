angular.module("products")
    .controller("productsCtrl", ["$scope", "productsSvc", "$rootScope", "productFact",

                                 function ($scope, productsSvc, $rootScope, productFact) {

            productsSvc.getProducts()
                .then(function (response) {
                    console.log(response);
                    $scope.products = response;
                }).catch(function (response) {
                    console.log(response);
                });

            $scope.addProduct = function (item) {
                productFact.addProductToCart(item);
                $rootScope.$broadcast("PRODUCT-ADDED", {
                    product: item
                })
            };
            $scope.removeProduct = function (item) {
                $rootScope.$broadcast("PRODUCT-Removed")
            };
}]);

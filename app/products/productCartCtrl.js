angular.module("products")
    .controller("cartCtrl", ["$scope", "productFact",
                                 function ($scope, productFact) {

            $scope.products = productFact.getProductsForCart()


}]);

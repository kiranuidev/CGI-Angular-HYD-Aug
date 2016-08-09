angular.module("products")
    .controller("productsCtrl", ["$scope", "productsSvc",
                                 function ($scope, productsSvc) {

            productsSvc.getProducts()
                .then(function (response) {
                    console.log(response);
                    $scope.products = response;
                }).catch(function (response) {
                    console.log(response);
                });

}]);

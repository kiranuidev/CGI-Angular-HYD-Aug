angular.module("products")
    .service("productsSvc", ["$q", "$http", function ($q, $http) {
        this.getProducts = function () {
            var dfd = $q.defer();
            $http.get("app/data/products.json")
                .then(function (response) {
                    dfd.resolve(response.data.products);
                })
                .catch(function (response) {
                    dfd.reject("Error Occured")
                });

            return dfd.promise;
        };


}]);

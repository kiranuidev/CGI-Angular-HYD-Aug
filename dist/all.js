angular.module("components", []);

angular.module("components")
    .directive("alphabetsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                console.log(scope);
                console.log(element);
                console.log(attrs);
                element.bind("keypress", function (event) {
                    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {

                    } else {
                        event.preventDefault();
                    }
                });
            }
        };

}]);

angular.module("components")
    .directive("brandName", [function () {
        return {
            template: "{{companyName}}",
            restrict: "A",
            scope: {
                companyName: "@" //one way communication.
            }
        };

}]);

angular.module("components")
    .directive("cgiDatePicker", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var config = {};
                if (attrs["maxdate"]) {
                    config.maxDate = attrs["maxdate"];
                }
                if (attrs["mindate"]) {
                    config.minDate = attrs["mindate"];
                }
                element.datepicker(config);
            }
        };
}]);



angular.module("components")
    .directive("customDetails", [function () {
        return {
            templateUrl: "app/templates/customDetails.html",
            restrict: "A",
            scope: {
                labelToDisplay: "@", //one way communication.
                contentToDisplay: "=" //two way communcication
            }
        };

}]);

angular.module("components")
    .directive("customHeader", [function () {
        return {
            templateUrl: "app/templates/header.html",
            restrict: "A"
        };

}]);

angular.module("components")
    .directive("customTrans", [function () {
        return {
            template: "<h1>How r u</h1><div ng-transclude></div>",
            restrict: "A",
            transclude: true

        };

}]);

angular.module("components")
    .filter("phoneformat", [function () {

        return function (input, criteria, criteria2) {

            if (input.length == 10 && criteria == "US") {
                var firstThree = input.substring(0, 3);
                var secondThree = input.substring(3, 6);
                var lastFour = input.substring(6, 10);
                if (criteria2) {
                    return "(" + firstThree + ")" + secondThree + "-" + lastFour;
                }
                return firstThree + "-" + secondThree + "-" + lastFour;
            } else if (input.length == 10 && criteria == "IN") {
                var firstFive = input.substring(0, 5);
                var lastFive = input.substring(5, 10);
                if (criteria2) {
                    return "(" + firstFive + ")-" + lastFive;
                }
                return firstFive + "-" + lastFive;
            }

            return input;

        }

}]);

angular.module("main", []);

angular.module("main")
    .controller("mainCtrl", ["$scope", "$rootScope",
                             function ($scope, $rootScope) {
            $scope.brand = "CGI";
            $scope.label = "First Name";
            $scope.data = "Kiran";
            $scope.itemCount = 0;
            $rootScope.$on("PRODUCT-ADDED", function (event, args) {
                $scope.itemCount++;
                console.log(args.product);
            });
            $rootScope.$on("PRODUCT-Removed", function (event, args) {
                $scope.itemCount--;
            });

            $scope.$watch("brand", function (newVal, oldVal) {
                console.log(newVal);
                console.log(oldVal);
            });

            setTimeout(function () {
                $scope.brand = "I am new brand";
                $scope.$apply();
            }, 5000)

    }]);

angular.module("products", []);

angular.module("products")
    .controller("cartCtrl", ["$scope", "productFact",
                                 function ($scope, productFact) {

            $scope.products = productFact.getProductsForCart()


}]);

angular.module("products")
    .factory("productFact", [function () {

        var factObj = {};
        var cartProducts = [];
        factObj.addProductToCart = function (item) {
            cartProducts.push(item);
        };

        factObj.getProductsForCart = function () {
            return cartProducts;
        };

        return factObj;


    }]);



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

angular.module("register", []);

angular.module("register")
    .controller("registerCtrl", ["$scope", "registerSvc",
                                 function ($scope, registerSvc) {
            $scope.pageName = "Register";
            $scope.user = {};

            registerSvc.getCountries()
                .then(function (response) {
                    console.log(response);
                    $scope.countries = response;
                }).catch(function (response) {
                    console.log(response);
                });


            $scope.register = function () {
                console.log($scope.user);
            };
            $scope.loadStates = function () {
                $scope.states = registerSvc.getStates($scope.selectedCountry.code);
                console.log($scope.states);
            };

}]);

angular.module("register")
    .service("registerSvc", ["$q", "$http", function ($q, $http) {
        this.getCountries = function () {
            var dfd = $q.defer();
            /*var countries = [{
                    name: "India",
                    code: "IN"
                },
                {
                    name: "Canada",
                    code: "CA"
                },
                {
                    name: "United States",
                    code: "US"
                }];

            if (countries) {
                dfd.resolve(countries)
            } else {
                dfd.reject("there are no countries");
            }*/
            $http.get("app/data/lookup.json")
                .then(function (response) {
                    console.log(response);
                    dfd.resolve(response.data.countries);
                }).catch(function (response) {
                    console.log(response);
                    dfd.reject("Error Occured");
                });

            return dfd.promise;
        };

        this.getStates = function (code) {
            var states = [
                {
                    name: "Telangana",
                    stateCode: "TS",
                    countryCode: "IN"
                },
                {
                    name: "Andhra Pradesh",
                    stateCode: "AP",
                    countryCode: "IN"
                },
                {
                    name: "Texas",
                    stateCode: "TX",
                    countryCode: "US"
                },
                {
                    name: "New York",
                    stateCode: "NY",
                    countryCode: "US"
                }
             ];

            var stateList = [];

            angular.forEach(states, function (item) {
                if (item.countryCode === code) {
                    stateList.push(item);
                }
            });
            return stateList;
        };
}]);

angular.module("myntra", ["main", "ui.router", "register", "products", "components"]);


//configure routing
angular.module("myntra")
    .config(function ($stateProvider) {

        var loginObj = {
            templateUrl: "app/templates/login.html"
        };
        var registerObj = {
            templateUrl: "app/templates/register.html"
        };
        var productsObj = {
            templateUrl: "app/templates/products.html"

        };
        var cartObj = {
            templateUrl: "app/templates/cart.html"

        };


        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("cart", cartObj);
    });

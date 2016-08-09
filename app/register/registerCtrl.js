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

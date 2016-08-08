angular.module("register")
    .controller("registerCtrl", ["$scope", "registerSvc",
                                 function ($scope, registerSvc) {
            $scope.pageName = "Register";
            $scope.user = {};

            $scope.countries = registerSvc.getCountries();
            console.log($scope.countries);

            $scope.register = function () {
                console.log($scope.user);
            };
            $scope.loadStates = function () {
                $scope.states = registerSvc.getStates($scope.selectedCountry.code);
                console.log($scope.states);
            };

}]);

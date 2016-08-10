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

angular.module("components")
    .directive("customHeader", [function () {
        return {
            templateUrl: "app/templates/header.html",
            restrict: "A"
        };

}]);

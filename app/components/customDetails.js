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

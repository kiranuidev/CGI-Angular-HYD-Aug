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

angular.module("components")
    .directive("alphabetsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                console.log(scope);
                console.log(element);
                console.log(attrs);
            }
        };

}]);

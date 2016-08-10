angular.module("components")
    .directive("customTrans", [function () {
        return {
            template: "<h1>How r u</h1><div ng-transclude></div>",
            restrict: "A",
            transclude: true

        };

}]);

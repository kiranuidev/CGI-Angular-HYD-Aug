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

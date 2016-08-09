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

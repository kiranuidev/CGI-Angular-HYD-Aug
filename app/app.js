angular.module("myntra", ["main", "ui.router", "register"]);


//configure routing
angular.module("myntra")
    .config(function ($stateProvider) {

        var loginObj = {
            templateUrl: "app/templates/login.html"
        };
        var registerObj = {
            templateUrl: "app/templates/register.html"
        };

        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
    });

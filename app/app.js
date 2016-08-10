angular.module("myntra", ["main", "ui.router", "register", "products", "components"]);


//configure routing
angular.module("myntra")
    .config(function ($stateProvider) {

        var loginObj = {
            templateUrl: "app/templates/login.html"
        };
        var registerObj = {
            templateUrl: "app/templates/register.html"
        };
        var productsObj = {
            templateUrl: "app/templates/products.html"

        };
        var cartObj = {
            templateUrl: "app/templates/cart.html"

        };


        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("cart", cartObj);
    });

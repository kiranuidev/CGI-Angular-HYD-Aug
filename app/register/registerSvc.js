angular.module("register")
    .service("registerSvc", ["$q", "$http", function ($q, $http) {
        this.getCountries = function () {
            var dfd = $q.defer();
            /*var countries = [{
                    name: "India",
                    code: "IN"
                },
                {
                    name: "Canada",
                    code: "CA"
                },
                {
                    name: "United States",
                    code: "US"
                }];

            if (countries) {
                dfd.resolve(countries)
            } else {
                dfd.reject("there are no countries");
            }*/
            $http.get("app/data/lookup.json")
                .then(function (response) {
                    console.log(response);
                    dfd.resolve(response.data.countries);
                }).catch(function (response) {
                    console.log(response);
                    dfd.reject("Error Occured");
                });

            return dfd.promise;
        };

        this.getStates = function (code) {
            var states = [
                {
                    name: "Telangana",
                    stateCode: "TS",
                    countryCode: "IN"
                },
                {
                    name: "Andhra Pradesh",
                    stateCode: "AP",
                    countryCode: "IN"
                },
                {
                    name: "Texas",
                    stateCode: "TX",
                    countryCode: "US"
                },
                {
                    name: "New York",
                    stateCode: "NY",
                    countryCode: "US"
                }
             ];

            var stateList = [];

            angular.forEach(states, function (item) {
                if (item.countryCode === code) {
                    stateList.push(item);
                }
            });
            return stateList;
        };
}]);

angular.module("register")
    .service("registerSvc", ["$q", function ($q) {
        this.getCountries = function () {
            var dfd = $q.defer();
            var countries = [{
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
            }


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

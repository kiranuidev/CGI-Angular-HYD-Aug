angular.module("register")
    .service("registerSvc", [function () {
        this.getCountries = function () {
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

            return countries;
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




(function () {
    'use strict';

    var definitions = {
        subHeadingsService: function (restService, serviceUrl) {
            var serviceDefinition = {};

            if (restService && serviceUrl) {
                var subHeadingsRestService = restService(serviceUrl);

                serviceDefinition = {
                    getSubHeadings: function () {
                        return subHeadingsRestService.query().$promise;
                    }
                };
            }

            return serviceDefinition;
        },
        authenticationService: function (restService, serviceUrl) {
            var serviceDefinition = {};

            if (restService && serviceUrl) {
                serviceDefinition = {
                    authenticate: function (userName, password) {
                        var authService = restService(serviceUrl);

                        return authService.save({
                            userName: userName,
                            password: password
                        }).$promise;
                    }
                }
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
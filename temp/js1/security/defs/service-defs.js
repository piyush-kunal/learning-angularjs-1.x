(function () {
    'use strict';

    var definitions = {
        authenticationService: function (restService, serviceUrl) {
            var serviceDefinition = {};

            if (restService && serviceUrl) {
                var authenticationRestService = restService(serviceUrl);

                serviceDefinition = {
                    authenticate: function (userName, password) {
                        return authenticationRestService.save({
                            userName: userName,
                            password: password
                        }).$promise;
                    }
                };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
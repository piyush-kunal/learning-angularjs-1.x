(function () {
    'use strict';

    var definitions = {
        gsAuthInterceptor: function (browser, qService, gsAuthKey) {
            var HTTP_UNAUTHORIZED = 401;
            var BEARER = "Bearer";
            var DELIMITER = " ";

            var serviceDefinition = {};
            var validation = browser && qService && gsAuthKey;

            if (validation) {
                serviceDefinition = {
                    request: function (configuration) {
                        configuration.headers = configuration.headers || {};

                        var authToken = browser.localStorage.getItem(gsAuthKey);

                        if (authToken) {
                            configuration.headers.Authorization =
                                BEARER + DELIMITER + authToken;
                        }

                        return configuration;
                    },
                    responseError: function (error) {
                        if (error.statusCode === HTTP_UNAUTHORIZED) {
                            // TODO: LOGIC TO REDIRECT
                        }

                        return qService.reject(error);
                    }
                }
            }

            return serviceDefinition;
        },
        configureHttpInterceptors: function (httpProvider) {
            if (httpProvider) {
                httpProvider.interceptors.push('gsAuthInterceptor');
            }
        }
    };

    module.exports = definitions;
})();
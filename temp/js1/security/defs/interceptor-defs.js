(function () {
    'use strict';

    var AUTHORIZATION_STD_HEADER = "Bearer";
    var DELIMITER = " ";
    var HTTP_UNAUTHORIZED = 401;

    var definitions = {
        authorizationInterceptor: function (browser, promiseService, authTokenInfo) {
            var interceptorDefinition = {};
            var validation = browser &&
                promiseService && authTokenInfo;

            if (validation) {
                interceptorDefinition = {
                    request: function (configuration) {
                        configuration.headers = configuration.headers || {};

                        var authToken = browser.localStorage.getItem(authTokenInfo.authTokenKey);

                        if (authToken) {
                            configuration.headers.Authorization =
                                AUTHORIZATION_STD_HEADER + DELIMITER + authToken;
                        }

                        return configuration;
                    },
                    responseError: function (error) {
                        if (error.statusCode === HTTP_UNAUTHORIZED) {
                            // TODO: WRITE LOGIC TO REDIRECT THE USER TO LOGIN/HELP PAGE
                        }

                        return promiseService.reject(error);
                    }
                };
            }

            return interceptorDefinition;
        },
        configureHttpInterceptors: function (httpProviderService) {
            if (httpProviderService) {
                httpProviderService.interceptors.push('authorizationInterceptor');
            }
        }
    };

    module.exports = definitions;
})();
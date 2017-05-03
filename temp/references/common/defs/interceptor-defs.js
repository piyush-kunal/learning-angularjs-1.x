(function () {
    'use strict';

    var BRAND_KEY = "intsolBrand";
    var INTSOL_BRAND_INTERCEPTOR = "intsolBrandInterceptor";

    var definitions = {
        httpInterceptorService: function (promise, browser) {
            var serviceDefinition = {};

            if (promise && browser) {
                serviceDefinition = {
                    request: function (configuration) {
                        configuration.headers = configuration.headers || {};

                        var brandValue = browser.localStorage.getItem(BRAND_KEY);

                        if (brandValue) {
                            configuration.headers.Brand = brandValue;
                        }

                        return configuration;
                    },
                    responseError: function (error) {
                        return promise.reject(error);
                    }
                }
            }

            return serviceDefinition;
        },
        configureHttpPipeline: function (httpProvider) {
            if (httpProvider) {
                httpProvider.interceptors.push(INTSOL_BRAND_INTERCEPTOR);
            }
        }
    };

    module.exports = definitions;
})();
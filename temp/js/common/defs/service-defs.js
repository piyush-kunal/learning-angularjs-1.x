(function () {
    'use strict';

    var definitions = {
        subHeadingService: function (restService, serviceUrl) {
            var serviceDefinition = {};
            var validation = restService && serviceUrl;

            if (validation) {
                var subHeadingRestService = restService(serviceUrl);

                serviceDefinition = {
                    getSubHeadings: function () {
                        return subHeadingRestService.query().$promise;
                    }
                };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
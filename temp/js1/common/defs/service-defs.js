(function () {
    'use strict';

    var definitions = {
        subHeadingsService: function (restService, serviceUrl) {
            var serviceDefinition = {};
            var validation = restService && serviceUrl;

            if (validation) {
                var subHeadingsRestService = restService(serviceUrl);

                serviceDefinition = {
                    getSubHeadings: function() {
                        return subHeadingsRestService.query().$promise;
                    }
                };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
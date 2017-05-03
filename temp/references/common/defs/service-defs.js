(function () {
    'use strict';

    var definitions = {
        subHeadingsService: function (restService, dataServiceUrl) {
            var serviceDefinition = {};

            if (restService && dataServiceUrl) {
                var subHeadingsRestService = restService(dataServiceUrl);

                serviceDefinition = {
                    getSubHeadings: function () {
                        return subHeadingsRestService.query().$promise;
                    }
                };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
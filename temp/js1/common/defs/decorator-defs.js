(function () {
    'use strict';

    var CACHE_CONTAINER = 'intsolSubHeadingsCacheContainer';
    var CACHE_KEY = 'intsolSubHeadingsCache';

    function decorateSubHeadingsService(delegateService,
                                        promiseService, cacheFactory, loggerService) {

        var realServiceImpl = delegateService.getSubHeadings;
        var cacheContainer = cacheFactory(CACHE_CONTAINER);

        delegateService.getSubHeadings = function () {
            var cache = cacheContainer.get(CACHE_KEY);
            var deferred = promiseService.defer();

            if (cache) {
                loggerService.info("Cache Found ...");
                deferred.resolve(cache);
            } else {
                loggerService.info("Cache Not Found ...");

                realServiceImpl().then(
                    function (data) {
                        if (data) {
                            cacheContainer.put(CACHE_KEY, data);

                            deferred.resolve(data);
                        }
                    },
                    function (error) {
                        if (error) {
                            deferred.reject(error);
                        }
                    });
            }

            return deferred.promise;
        };

        return delegateService;
    }

    var definitions = {
        configureDecoratorService: function (provideService) {
            if (provideService) {
                var serviceToDecorate = 'subHeadingsService';
                var decoratorDefinition =
                    [
                        '$delegate',
                        '$q',
                        '$cacheFactory',
                        '$log',
                        decorateSubHeadingsService
                    ];

                provideService.decorator(serviceToDecorate, decoratorDefinition);
            }
        }
    };

    module.exports = definitions;
})();
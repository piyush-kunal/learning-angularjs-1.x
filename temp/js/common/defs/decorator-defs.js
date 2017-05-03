(function () {
    'use strict';

    var CACHE_CONTAINER = 'subHeadingCacheContainer';
    var CACHE_KEY = 'subHeadings';

    function decorateSubHeadingService(delegateService, 
        cacheFactory, promiseService, loggerService) {
        var validation = delegateService && cacheFactory && 
            promiseService && loggerService;

        if (validation) {
            var realServiceReference = delegateService.getSubHeadings;
            var subHeadingCacheContainer = cacheFactory(CACHE_CONTAINER);

            delegateService.getSubHeadings = function () {
                var deferred = promiseService.defer();
                var cache = subHeadingCacheContainer.get(CACHE_KEY);

                if (cache) {
                    loggerService.info('Cache Found ... Reusing ...');
                    
                    deferred.resolve(cache);
                } else {
                    loggerService.info('Cache Not Found ... Processing ...');

                    realServiceReference()
                        .then(function (result) {
                            if (result) {
                                subHeadingCacheContainer.put(CACHE_KEY, result);

                                deferred.resolve(result);
                            }
                        }, function (error) {
                            deferred.reject(error);
                        });
                }

                return deferred.promise;
            };
        }

        return delegateService;
    }

    var definitions = {
        configureServiceDecorators: function (provideService) {
            if (provideService) {
                var subHeadingServiceDecoratorDefinition = [
                    '$delegate',
                    '$cacheFactory',
                    '$q',
                    '$log',
                    decorateSubHeadingService
                ];

                provideService.decorator(
                    'subHeadingService', subHeadingServiceDecoratorDefinition);
            }
        }
    };

    module.exports = definitions;
})();
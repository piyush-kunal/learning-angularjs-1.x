(function () {
    'use strict';

    var CACHE_CONTAINER = "subHeadingsCacheContainer";
    var CACHE_KEY = "subHeadingsCache";

    function redefineGetSubHeadings(delegate, promise, logger, cacheFactory) {
        if (delegate && promise && cacheFactory && logger) {
            var realServiceImpl = delegate.getSubHeadings;
            var deferred = promise.defer();
            var cacheContainer = cacheFactory(CACHE_CONTAINER, {
                capacity: 3
            });

            delegate.getSubHeadings = function () {
                var cache = cacheContainer.get(CACHE_KEY);

                if (cache) {
                    logger.info('Cache Found & Using ...');
                    deferred.resolve(cache);
                } else {
                    logger.info('Cache Not Found ...');

                    realServiceImpl().then(
                        function (data) {
                            if (!data) {
                                deferred.reject('Error');
                            }

                            cacheContainer.put(CACHE_KEY, data);

                            deferred.resolve(data);
                        },
                        function (error) {
                            deferred.reject(error);
                        });
                }

                return deferred.promise;
            };

            return delegate;
        }
    }

    var definitions = {
        configureSubHeadingsDecorator: function (provideService) {
            if (provideService) {
                var redefinition =
                    [
                        '$delegate',
                        '$q',
                        '$log',
                        '$cacheFactory',
                        redefineGetSubHeadings
                    ];

                provideService.decorator('intsolSubHeadingsService', redefinition);
            }
        }
    };

    module.exports = definitions;
})();
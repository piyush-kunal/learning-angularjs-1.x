(function () {
    'use strict';

    function decorateSubHeadingsService(delegate, qService, cacheFactory, logger) {
        var validation = delegate && qService && cacheFactory && logger;
        var CACHE_KEY_CONTAINER = "subHeadingsCacheContainer";
        var CACHE_KEY = "subHeadingsCache";

        if (validation) {
            var realService = delegate.getSubHeadings;
            var subHeadingsCacheFactory = cacheFactory(CACHE_KEY_CONTAINER, {
                capacity: 3
            });

            delegate.getSubHeadings = function () {
                var deferred = qService.defer();
                var subHeadingsCache = subHeadingsCacheFactory.get(CACHE_KEY);

                if (subHeadingsCache) {
                    logger.info('Cache Found & Using ...');

                    deferred.resolve(subHeadingsCache);
                } else {
                    logger.info('Cache Not Found ...');

                    realService().then(
                        function (data) {
                            if (data) {
                                subHeadingsCacheFactory.put(CACHE_KEY, data);

                                deferred.resolve(data);
                            } else deferred.reject('Invalid Data Error');
                        },
                        function (error) {
                            deferred.reject(error);
                        });
                }

                return deferred.promise;
            };
        }

        return delegate;
    }

    var definitions = {
        configureServiceDecorators: function (provideService) {
            if (provideService) {
                var decoratorDefinition =
                    [
                        '$delegate',
                        '$q',
                        '$cacheFactory',
                        '$log',
                        decorateSubHeadingsService
                    ];

                provideService.decorator('gsSubHeadingsService', decoratorDefinition);
            }
        },
        logService: function (browser) {
            var serviceDefinition = {};
            var generateLogId = function () {
                var MIN_LOG_ID = 1;
                var MAX_LOG_ID = 1000000;

                var generatedLogId = Math.floor(
                    Math.random() * (MAX_LOG_ID - MIN_LOG_ID) + MIN_LOG_ID);

                return generatedLogId;
            };

            var logMessage = function (message, logType) {
                var logId = generateLogId();
                var logKey = logType + '-' + logId;
                var formattedMessage = logKey + " : " +
                    new Date().toString() + " " + message.toString().toUpperCase();

                browser.localStorage.setItem(logKey, formattedMessage);
            }

            if (browser) {
                serviceDefinition = {
                    log: function (message) {
                        logMessage(message, 'LOG');
                    },
                    info: function (message) {
                        logMessage(message, 'INFO');
                    },
                    warn: function (message) {
                        logMessage(message, 'WARN');
                    },
                    debug: function (message) {
                        logMessage(message, 'DEBUG');
                    },
                    error: function (message) {
                        logMessage(message, 'ERROR');
                    },
                    verbose: function (message) {
                        logMessage(message, 'VERBOSE');
                    },
                };
            }

            return serviceDefinition;
        },
        exceptionHandlerService: function (logger) {
            var serviceDefinition = null;

            if (logger) {
                serviceDefinition =
                    function (exception, cause) {
                        var message = 'GS Error Occurred, Details : ' +
                            exception.message;

                        if (cause) {
                            message += ', Cause : ' + cause;
                        }

                        logger.error(message);
                    };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    function generateLogId() {
        var MIN_ID = 1;
        var MAX_ID = 10000000;

        var logId = Math.floor(
            Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

        return logId;
    }


    function decorateLoggingService(delegateService, browser) {
        var dumpLocalStorage = function (errorType, message) {
            var logId = generateLogId();
            var logKey = errorType + "-" + logId;
            var formattedMessage =
                logKey + "-" +
                new Date().toString() + "-" +
                message.toString().toUpperCase();

            browser.localStorage.setItem(logKey, formattedMessage);
        };

        delegateService = {
            verbose: function (message) {
                dumpLocalStorage("VERBOSE", message);
            },
            info: function (message) {
                dumpLocalStorage("INFO", message);
            },
            warn: function (message) {
                dumpLocalStorage("WARN", message);
            },
            error: function (message) {
                dumpLocalStorage("ERROR", message);
            },
            debug: function (message) {
                dumpLocalStorage("DEBUG", message);
            }
        };

        return delegateService;
    }

    function decorateExceptionHandlingService(delegateService, logger) {
        delegateService = function (exception, cause) {
            if (logger) {
                var formattedException = JSON.stringify(exception);

                if (cause) {
                    formattedException += ", Cause :" + cause;
                }

                logger.error(formattedException);
            }
        };

        return delegateService;
    }

    var definitions = {
        configureDecorators: function (provideService) {
            var loggingServiceDecorator =
                [
                    '$delegate',
                    '$window',
                    decorateLoggingService
                ];

            var exceptionHandlingServiceDecorator =
                [
                    '$delegate',
                    '$log',
                    decorateExceptionHandlingService
                ];

            provideService.decorator('$log', loggingServiceDecorator);
            provideService.decorator('$exceptionHandler', exceptionHandlingServiceDecorator);
        }
    };

    module.exports = definitions;
})();
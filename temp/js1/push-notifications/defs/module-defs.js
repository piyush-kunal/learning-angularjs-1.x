(function () {
    'use strict';

    var definitions = {
        initializePushNotificationsModule: function (loggerService) {
            if (loggerService) {
                loggerService.info("Push Notifications Module Initialized!");
            }
        }
    };

    module.exports = definitions;
})();
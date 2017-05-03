(function () {
    'use strict';

    function IntSolNotificationService(urlProviderService) {
        if (urlProviderService) {
            var registeredCallbacks = {};
            var notificationClient = require('socket.io-client');
            var notificationUrl = urlProviderService.getNotificationUrl();
            var notificationListener = notificationClient.connect(notificationUrl);

            this.registerCallback = function (eventName, callback) {
                var validation = eventName && callback &&
                    typeof callback === 'function';

                if (validation) {
                    if (!registeredCallbacks[eventName]) {
                        registeredCallbacks[eventName] = [];

                        notificationListener.on(eventName,
                            function (notificationMessage) {
                                var eventCallbacks = registeredCallbacks[eventName];

                                if (eventCallbacks) {
                                    for (var callbackIndex in eventCallbacks) {
                                        var eventCallback = eventCallbacks[callbackIndex];

                                        if (eventCallback) {
                                            eventCallback(notificationMessage);
                                        }
                                    }
                                }
                            });
                    }

                    registeredCallbacks[eventName].push(callback);
                }
            };
        }
    }

    var definitions = {
        notificationUrlProviderService: function (browser) {
            var serviceDefinition = {};

            if (browser) {
                var locationService = browser.location;

                serviceDefinition = {
                    getNotificationUrl: function () {
                        var notificationUrl = locationService.protocol + "//" +
                            locationService.hostname + ":" +
                            locationService.port + "/";

                        return notificationUrl;
                    }
                };
            }

            return serviceDefinition;
        },
        notificationService: IntSolNotificationService
    };

    module.exports = definitions;
})();
/**
 * Created by Ramkumar on 4/11/2016.
 */

(function () {

    'use strict';

    var definitions = {
        initializeApp: function (logger) {
            if (logger) {
                logger.info('Application Initialized Successfully!');
            }
        },
        configureLocationProvider: function (locationProvider) {
            if (locationProvider) {
                locationProvider.html5Mode(true);
            }
        }
    };

    module.exports = definitions;

})();
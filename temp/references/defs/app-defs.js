/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {
    'use strict';

    var definitions = {
        initialize: function (logger) {
            if (logger) {
                logger.info('Application Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
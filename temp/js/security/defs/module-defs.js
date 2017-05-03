(function () {
    'use strict';

    var definitions = {
        initializeModule: function (logger) {
            if (logger) {
                logger.info('Security Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var definitions = {
        initializeModule: function (logger) {
            if (logger) {
                logger.info('Charting Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
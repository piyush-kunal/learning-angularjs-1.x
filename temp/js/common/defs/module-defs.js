(function () {
    'use strict';

    var definitions = {
        initializeModule: function(loggerService) {
            if(loggerService) {
                loggerService.info('Common Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
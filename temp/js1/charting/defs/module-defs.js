(function () {
    'use strict';

    var definitions = {
        initializeChartingModule: function (loggerService) {
            if (loggerService) {
                loggerService.info("Charting Module Initialized!");
            }
        }
    };

    module.exports = definitions;
})();
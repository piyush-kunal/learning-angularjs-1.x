(function () {
    'use strict';

    var definitions = {
        initializeBuildingBlocksModule: function (loggerService) {
            if (loggerService) {
                loggerService.info(
                    "Building Blocks has Initializer Logging and Exception Handling Services ...");
            }
        }
    };

    module.exports = definitions;
})();
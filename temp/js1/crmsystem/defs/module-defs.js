(function () {
    'use strict';

    var definitions = {
        initializeCrmSystem: function (globalViewModel, loggerService) {
            var validation = globalViewModel && loggerService;

            if (validation) {
                globalViewModel.crmSystemInitTime = new Date();
                
                loggerService.info("Crm System Initialized Successfully!");
            }
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var definitions = {
        initializeModule: function (logger, globalViewModel) {
            var validation = logger && globalViewModel;

            if (validation) {
                globalViewModel.crmSystemLoadTime = new Date();

                logger.info('CRM System Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
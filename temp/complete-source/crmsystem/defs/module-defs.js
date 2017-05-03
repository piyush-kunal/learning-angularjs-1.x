(function () {
    'use strict';

    var definitions = {
        initializeCrmSystemModule: function (logger, globalViewModel) {
            if (logger && globalViewModel) {
                globalViewModel.authRequired = true;
                globalViewModel.isAuthenticated = false;

                logger.info("Crm System Module Initialized!");
            }
        }
    };

    module.exports = definitions;
})();
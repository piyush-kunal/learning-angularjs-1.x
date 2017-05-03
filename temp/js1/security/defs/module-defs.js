(function () {
    'use strict';

    var GUEST_MODE = 'guest';

    var definitions = {
        initializeSecurityModule: function (
            loggerService, browser, globalViewModel, authTokenInfo) {
            var validation = loggerService && browser && globalViewModel && authTokenInfo;

            if (validation) {
                var authToken = browser.localStorage.getItem(authTokenInfo.authTokenKey);

                if (authToken) {
                    browser.localStorage.removeItem(authTokenInfo.authTokenKey);
                }

                globalViewModel.isAuthenticated = false;
                globalViewModel.userMode = GUEST_MODE;

                loggerService.info('IntSol Security Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
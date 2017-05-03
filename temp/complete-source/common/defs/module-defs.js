(function () {
    'use strict';

    var AUTH_KEY = "gsAuthToken";
    var COMMON_MODULE_INIT_TIME_KEY = "commonModuleInitTime";

    var definitions = {
        initializeCommonModule: function (logger, browser) {
            if (logger && browser) {
                var moduleInitTime = new Date();

                browser.localStorage.removeItem(AUTH_KEY);
                browser.localStorage.setItem(COMMON_MODULE_INIT_TIME_KEY, moduleInitTime.toString());

                logger.log("Common Module Initialized Successfully!");
            }
        }
    };

    module.exports = definitions;
})();
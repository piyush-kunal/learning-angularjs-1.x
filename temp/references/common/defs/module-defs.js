(function () {
    'use strict';

    var BRAND_KEY = "intsolBrand";
    var definitions = {
        initialize: function (logger, browser) {
            if (logger && browser) {

                browser.localStorage.setItem(BRAND_KEY, "IntSol");

                logger.info('Common Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        loginPanelDirective: function (templateUrls) {
            return directiveUtils.createDirective(templateUrls.loginPanel);
        }
    };

    module.exports = definitions;
})();
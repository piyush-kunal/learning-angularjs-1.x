(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        loginPanelDirective: function (templateUrls) {
            var scope = null;
            var controller = 'authenticationController';

            return directiveUtils.createDirective(
                templateUrls.loginPanel, scope, controller);
        }
    };

    module.exports = definitions;
})();
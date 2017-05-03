(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        initializeHeaderDirective: function (templateUrls) {
            var scope = {
                headerTitle: '@'
            };

            return directiveUtils.defineDirective(templateUrls.header, scope);
        },
        initializeNavigationPanelDirective: function (templateUrls) {
            var scope = {};
            var controller = 'gsNavigationPanelController';

            return directiveUtils.defineDirective(templateUrls.navigationPanel, scope, controller);
        },
        initializeLoginPanelDirective: function (templateUrls) {
            var scope = {};
            var controller = 'gsLoginPanelController';

            return directiveUtils.defineDirective(templateUrls.loginPanel, scope, controller);
        },
        initializeFooterDirective: function (templateUrls) {
            return directiveUtils.defineDirective(templateUrls.footer);
        },
        initializeSubHeadingViewerDirective: function (templateUrls) {
            var scope = {
                title: '=',
                description: '='
            };

            return directiveUtils.defineDirective(templateUrls.subHeadingViewer, scope);
        }
    };

    module.exports = definitions;
})();
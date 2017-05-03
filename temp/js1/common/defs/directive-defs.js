(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        headerDirective: function (templateUrls) {
            var scope = {
                headerTitle: '@'
            };

            return directiveUtils.createDirective(templateUrls.header, scope);
        },
        footerDirective: function (templateUrls) {
            return directiveUtils.createDirective(templateUrls.footer);
        },
        navigationPanelDirective: function (templateUrls) {
            return directiveUtils.createDirective(templateUrls.navigationPanel);
        },
        subHeadingsViewerDirective: function (templateUrls) {
            var scope = {
                title: '=',
                description: '='
            };

            return directiveUtils.createDirective(templateUrls.subHeadingsViewer, scope);
        }
    };

    module.exports = definitions;
})();
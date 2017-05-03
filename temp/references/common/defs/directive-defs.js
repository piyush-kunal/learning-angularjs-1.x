(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        headerDirective: function (templateUrls) {
            var scope = {
                headerTitle: '@'
            };

            return directiveUtils.defineDirective(templateUrls.header, scope);
        },
        navigationDirective: function (templateUrls) {
            return directiveUtils.defineDirective(templateUrls.navigation);
        },
        footerDirective: function (templateUrls) {
            return directiveUtils.defineDirective(templateUrls.footer);
        },
        subHeadingViewerDirective: function(templateUrls) {
            var scope = {
                title: '=',
                description: '='
            };

            return directiveUtils.defineDirective(templateUrls.subHeadingViewer, scope);
        }
    };

    module.exports = definitions;
})();
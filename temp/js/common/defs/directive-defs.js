(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        headerDirective: function (templateUrls) {
            var scope = {
                headerTitle: '='
            };

            return directiveUtils.createDirective(templateUrls.header, scope);
        },
        navigationDirective: function (templateUrls) {
            return directiveUtils.createDirective(templateUrls.navigation);
        },
        footerDirective: function (templateUrls) {
            return directiveUtils.createDirective(templateUrls.footer);
        },
        subHeadingViewerDirective: function (templateUrls) {
            var scope = {
                subHeadingTitle: '=',
                subHeadingDescription: '='
            };

            return directiveUtils.createDirective(templateUrls.subHeadingViewer, scope);
        }
    };

    module.exports = definitions;
})();
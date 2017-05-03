(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        customerViewerDirective: function (templateUrls) {
            var scope = {
                customerInfo: '='
            };

            return directiveUtils.createDirective(templateUrls.customerViewer, scope);
        },
        customerDetailViewerDirective: function (templateUrls) {
            var scope = {
                customerDetail: '='
            };

            return directiveUtils.createDirective(templateUrls.customerDetailViewer, scope);
        },
        customerSearchPanelDirective: function (templateUrls) {
            var scope = {
                searchString: '='
            };

            return directiveUtils.createDirective(templateUrls.customerSearchPanel, scope);
        },
        orderViewerDirective: function (templateUrls) {
            var scope = {
                ordersList: '='
            };

            return directiveUtils.createDirective(templateUrls.orderViewer, scope);
        }
    };

    module.exports = definitions;
})();
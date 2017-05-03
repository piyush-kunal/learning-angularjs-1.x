(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');
    var definitions = {
        initializeCustomerThumbnailViewerDirective: function (templateUrls) {
            var scope = {
                customerInfo: '='
            };

            return directiveUtils.defineDirective(templateUrls.customerThumbnailViewer, scope);
        },
        initializeCustomerSearchPanelDirective: function (templateUrls) {
            var scope = {
                searchString: '='
            };

            return directiveUtils.defineDirective(templateUrls.customerSearchPanel, scope);
        },
        initializeCustomerDetailViewerDirective: function (templateUrls) {
            var scope = {
                customerDetail: '='
            };

            return directiveUtils.defineDirective(templateUrls.customerDetailViewer, scope);
        },
        initializeOrderViewerDirective: function (templateUrls) {
            var scope = {
                ordersList: '='
            };

            return directiveUtils.defineDirective(templateUrls.orderViewer, scope);
        },
        initializeStockViewerDirective: function (templateUrls) {
            var scope = {
                companyName: '='
            };

            var controller = 'gsCrmSystemStockViewerController';

            return directiveUtils.defineDirective(templateUrls.stockViewer, scope, controller);
        },
        initializeDashboardSwitchPanelDirective: function (templateUrls) {
            var scope = {};
            var controller = 'gsDashboardSwitchPanelController';

            return directiveUtils.defineDirective(templateUrls.dashboardSwitchPanel, scope, controller);
        },
        initializeCreditLimitValidation: function () {
            var scope = {
                minimum: '=',
                maximum: '='
            };

            var templateUrl = null;
            var directive = directiveUtils.defineDirective (templateUrl, scope);

            directive.require = 'ngModel';
            directive.link = function (scope, element, attributes, model) {
                if (model) {
                    model.$validators.gsCreditLimitValidation =
                        function (modelValue) {
                            var status = false;

                            if (modelValue && modelValue >= scope.minimum &&
                                modelValue <= scope.maximum) {
                                status = true;
                            }

                            return status;
                        };
                }
            };

            return directive;
        }
    };

    module.exports = definitions;
})();
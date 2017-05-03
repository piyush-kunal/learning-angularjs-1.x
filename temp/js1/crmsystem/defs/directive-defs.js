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
        customerSearchPanelDirective: function (templateUrls) {
            var scope = {
                searchString: '='
            };

            return directiveUtils.createDirective(templateUrls.customerSearchPanel, scope);
        },
        customerDetailViewerDirective: function (templateUrls) {
            var scope = {
                customerDetail: '='
            };

            return directiveUtils.createDirective(templateUrls.customerDetailViewer, scope);
        },
        orderViewerDirective: function (templateUrls) {
            var scope = {
                ordersList: '='
            };

            return directiveUtils.createDirective(templateUrls.orderViewer, scope);
        },
        orderChartViewerDirective: function (templateUrls) {
            var scope = {
                ordersChartData: '='
            };

            var controller = 'orderChartViewerController';

            return directiveUtils.createDirective(
                templateUrls.orderChartViewer, scope, controller);
        },
        stockViewerDirective: function (templateUrls) {
            var scope = {
                customerId: '='
            };

            var controller = 'stockViewerController';

            return directiveUtils.createDirective(templateUrls.stockViewer, scope, controller);
        },
        stockHistoryViewerDirective: function (templateUrls) {
            var scope = {
                stockQuoteHistoryData: '='
            };

            return directiveUtils.createDirective(templateUrls.stockHistoryViewer, scope);
        },
        dashboardSwitchPanelDirective: function (templateUrls) {
            var scope = null;
            var controller = 'dashboardSwitchPanelController';

            return directiveUtils.createDirective(templateUrls.dashboardSwitchPanel, scope, controller);
        },
        newCustomerFormDirective: function (templateUrls) {
            var scope = null;
            var controller = 'newCustomerFormController';

            return directiveUtils.createDirective(templateUrls.newCustomerForm, scope, controller);
        },
        creditLimitValidationDirective: function () {
            var templateUrl = null;
            var scope = {
                minimumLimit: '=',
                maximumLimit: '='
            };

            var directiveObject = directiveUtils.createDirective(templateUrl, scope);

            if (directiveObject) {
                directiveObject.require = 'ngModel';
                directiveObject.link = function (scope, domElement, attributes, model) {
                    model.$validators.creditLimitValidation =
                        function (modelValue) {
                            var validationStatus = false;

                            if (modelValue && modelValue >= scope.minimumLimit &&
                                modelValue <= scope.maximumLimit) {
                                validationStatus = true;
                            }

                            return validationStatus;
                        };
                };
            }

            return directiveObject;
        }
    };

    module.exports = definitions;
})();
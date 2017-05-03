(function () {
    'use strict';

    require('../charting/module');
    require('./config');

    var ngModuleName = 'com.intsol.modules.crmsystem.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.intsol.modules.charting',
            'com.intsol.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var customerViewerDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.customerViewerDirective
        ];

    var customerSearchPanelDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.customerSearchPanelDirective
        ];

    var customerDetailViewerDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.customerDetailViewerDirective
        ];

    var orderViewerDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.orderViewerDirective
        ];

    var orderChartViewerDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.orderChartViewerDirective
        ];

    var stockViewerDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.stockViewerDirective
        ];

    var stockHistoryViewerDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.stockHistoryViewerDirective
        ];

    var dashboardSwitchPanelDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.dashboardSwitchPanelDirective
        ];

    var newCustomerFormDirectiveDefinition =
        [
            'crmSystemDirTemplateUrls',
            definitions.newCustomerFormDirective
        ];

    var creditLimitValidationDirectiveDefinition =
        [
            definitions.creditLimitValidationDirective
        ];

    moduleObject.directive('customerViewer', customerViewerDirectiveDefinition);
    moduleObject.directive('customerSearchPanel', customerSearchPanelDirectiveDefinition);
    moduleObject.directive('customerDetailViewer', customerDetailViewerDirectiveDefinition);
    moduleObject.directive('orderViewer', orderViewerDirectiveDefinition);
    moduleObject.directive('orderChartViewer', orderChartViewerDirectiveDefinition);
    moduleObject.directive('stockViewer', stockViewerDirectiveDefinition);
    moduleObject.directive('stockHistoryViewer', stockHistoryViewerDirectiveDefinition);
    moduleObject.directive('dashboardSwitchPanel', dashboardSwitchPanelDirectiveDefinition);
    moduleObject.directive('newCustomerForm', newCustomerFormDirectiveDefinition);
    moduleObject.directive('creditLimitValidation', creditLimitValidationDirectiveDefinition);
})();
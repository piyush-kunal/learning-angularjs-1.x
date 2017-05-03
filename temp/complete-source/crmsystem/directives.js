(function () {
    'use strict';

    require('./config');

    var ngModuleName = 'com.gs.modules.crmsystem.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.gs.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var customerThumbnailViewerDirective =
        [
            'crmSystemDirTemplateUrls',
            definitions.initializeCustomerThumbnailViewerDirective
        ];

    var customerSearchPanelDirective =
        [
            'crmSystemDirTemplateUrls',
            definitions.initializeCustomerSearchPanelDirective
        ];

    var customerDetailViewerDirective =
        [
            'crmSystemDirTemplateUrls',
            definitions.initializeCustomerDetailViewerDirective
        ];

    var orderViewerDirective =
        [
            'crmSystemDirTemplateUrls',
            definitions.initializeOrderViewerDirective
        ];

    var stockViewerDirective =
        [
            'crmSystemDirTemplateUrls',
            definitions.initializeStockViewerDirective
        ];

    var dashboardSwitchPanelDirective =
        [
            'crmSystemDirTemplateUrls',
            definitions.initializeDashboardSwitchPanelDirective
        ];

    var creditLimitValidationDirectiveDefinition =
        [
            definitions.initializeCreditLimitValidation
        ];

    moduleObject.directive('gsCustomerThumnailViewer', customerThumbnailViewerDirective);
    moduleObject.directive('gsCustomerSearchPanel', customerSearchPanelDirective);
    moduleObject.directive('gsCustomerDetailViewer', customerDetailViewerDirective);
    moduleObject.directive('gsOrderViewer', orderViewerDirective);
    moduleObject.directive('gsStockViewer', stockViewerDirective);
    moduleObject.directive('gsDashboardSwitchPanel', dashboardSwitchPanelDirective);
    moduleObject.directive('gsCreditLimitValidation', creditLimitValidationDirectiveDefinition);
})();
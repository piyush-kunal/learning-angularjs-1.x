(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.gs.modules.crmsystem.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.gs.modules.crmsystem.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var crmSystemHomeViewControllerDefinition =
        [
            '$scope',
            'gsCustomerService',
            'gsNotificationService',
            definitions.crmSystemHomeViewController
        ];

    var crmSystemDashboardHomeViewControllerDefinition =
        [
            '$scope',
            '$q',
            '$state',
            '$stateParams',
            'gsCustomerService',
            'gsOrderService',
            'gsOrdersChartDataTransformer',
            'crmSystemEvents',
            definitions.crmSystemDashboardHomeViewController
        ];

    var crmSystemStockViewerControllerDefinition =
        [
            '$scope',
            '$window',
            '$interval',
            'gsStockQuoteService',
            definitions.crmSystemStockViewerController
        ];

    var dashboardSwitchPanelControllerDefinition =
        [
            '$scope',
            'crmSystemEvents',
            definitions.dashboardSwitchPanelController
        ];

    var newCustomerHomeViewControllerDefinition =
        [
            '$scope',
            '$timeout',
            '$state',
            'gsCustomerService',
            'redirectDetails',
            definitions.newCustomerHomeViewController
        ];

    moduleObject.controller('gsCrmSystemHomeViewController', crmSystemHomeViewControllerDefinition);
    moduleObject.controller('gsCrmSystemDashboardHomeViewController', crmSystemDashboardHomeViewControllerDefinition);
    moduleObject.controller('gsCrmSystemStockViewerController', crmSystemStockViewerControllerDefinition)
    moduleObject.controller('gsDashboardSwitchPanelController', dashboardSwitchPanelControllerDefinition);
    moduleObject.controller('gsCrmSystemNewCustomerHomeViewController', newCustomerHomeViewControllerDefinition);
})();
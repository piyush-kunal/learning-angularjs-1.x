(function () {
    'use strict';

    require('../push-notifications/module');
    require('./services');

    var ngModuleName = 'com.intsol.modules.crmsystem.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.intsol.modules.push-notifications',
            'com.intsol.modules.crmsystem.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemHomeViewControllerDefinition =
        [
            '$scope',
            'customerService',
            'notificationService',
            'pushNotificationEvents',
            definitions.crmSystemHomeViewController
        ];

    var crmSystemDashboardHomeViewControllerDefinition =
        [
            '$scope',
            '$q',
            '$stateParams',
            '$state',
            'customerService',
            'orderService',
            'crmSystemEvents',
            definitions.crmSystemDashboardHomeViewController
        ];

    var orderChartViewerControllerDefinition =
        [
            '$scope',
            'ordersChartDataTransformerService',
            definitions.orderChartViewerController
        ];

    var stockViewerControllerDefinition =
        [
            '$scope',
            '$interval',
            '$window',
            'stockQuoteService',
            'defaultRefreshInterval',
            definitions.stockViewerController
        ];

    var dashboardSwitchPanelControllerDefinition =
        [
            '$scope',
            'crmSystemEvents',
            definitions.dashboardSwitchPanelController
        ];

    var newCustomerFormControllerDefinition =
        [
            '$scope',
            'customerService',
            'crmSystemEvents',
            definitions.newCustomerFormController
        ];

    var newCustomerHomeViewControllerDefinition =
        [
            '$scope',
            '$interval',
            '$state',
            '$window',
            'crmSystemEvents',
            'redirectDetails',
            definitions.newCustomerHomeController
        ];

    /* Directive Controllers Registration */
    moduleObject.controller('orderChartViewerController', orderChartViewerControllerDefinition);
    moduleObject.controller('stockViewerController', stockViewerControllerDefinition);
    moduleObject.controller('dashboardSwitchPanelController', dashboardSwitchPanelControllerDefinition);
    moduleObject.controller('newCustomerFormController', newCustomerFormControllerDefinition);

    /* View Controllers Registration */
    moduleObject.controller('crmSystemHomeViewController', crmSystemHomeViewControllerDefinition);
    moduleObject.controller('crmSystemDashboardHomeViewController', crmSystemDashboardHomeViewControllerDefinition);
    moduleObject.controller('newCustomerHomeViewController', newCustomerHomeViewControllerDefinition);
})();
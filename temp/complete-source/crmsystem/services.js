(function () {
    'use strict';

    require('angular-resource');
    require('./config')

    var ngModuleName = 'com.gs.modules.crmsystem.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.gs.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var customerServiceDefinition =
        [
            '$resource',
            'crmSystemServiceUrls',
            definitions.customerService
        ];

    var orderServiceDefinition =
        [
            '$resource',
            'crmSystemServiceUrls',
            definitions.orderService
        ];

    var stockQuoteServiceDefinition = [definitions.stockQuoteService]
    var ordersChartDataTransformerDefinition =
        [
            definitions.ordersChartDataTransformer
        ];

    var notificationUrlProviderDefinition =
        [
            '$window',
            definitions.notificationUrlProvider
        ];

    var notificationServiceDefinition =
        [
            'gsNotificationUrlProvider',
            definitions.notificationService
        ];

    moduleObject.factory('gsCustomerService', customerServiceDefinition);
    moduleObject.factory('gsOrderService', orderServiceDefinition);
    moduleObject.factory('gsStockQuoteService', stockQuoteServiceDefinition);
    moduleObject.factory('gsOrdersChartDataTransformer', ordersChartDataTransformerDefinition);
    moduleObject.factory('gsNotificationUrlProvider', notificationUrlProviderDefinition);
    moduleObject.factory('gsNotificationService', notificationServiceDefinition);
})();
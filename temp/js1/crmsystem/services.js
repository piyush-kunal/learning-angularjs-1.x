(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var ngModuleName = 'com.intsol.modules.crmsystem.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.intsol.modules.crmsystem.config'
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

    var ordersChartDataTransformerServiceDefinition =
        [
            definitions.ordersChartDataTransformerService
        ];

    var stockQuoteServiceDefinition =
        [
            definitions.stockQuoteService
        ];

    moduleObject.factory('customerService', customerServiceDefinition);
    moduleObject.factory('orderService', orderServiceDefinition);
    moduleObject.factory('ordersChartDataTransformerService', ordersChartDataTransformerServiceDefinition);
    moduleObject.factory('stockQuoteService', stockQuoteServiceDefinition);
})();
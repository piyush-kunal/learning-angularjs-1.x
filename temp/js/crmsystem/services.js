(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var serviceRegUtils = require('../utilities/register-services');
    var ngModuleName = 'com.tecnotree.modules.crmsystem.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies = [
        'ngResource',
        'com.tecnotree.modules.crmsystem.config'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var customerServiceDefinition = [
        '$resource',
        'crmSystemServiceUrls',
        definitions.customerService
    ];

    var orderServiceDefinition = [
        '$resource',
        'crmSystemServiceUrls',
        definitions.orderService
    ];

    var orderChartDataTransformationServiceDefinition = [
        definitions.orderChartDataTransformationService
    ];

    var definitions = [{
            name: 'customerService',
            definition: customerServiceDefinition
        },
        {
            name: 'orderService',
            definition: orderServiceDefinition
        },
        {
            name: 'orderChartDataTransformationService',
            definition: orderChartDataTransformationServiceDefinition
        }
    ];

    serviceRegUtils.registerFactories(moduleObject, definitions);
})();
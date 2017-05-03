(function () {
    'use strict';

    require('./services');

    var controllerRegUtils = require('../utilities/register-controllers');

    var ngModuleName = 'com.tecnotree.modules.crmsystem.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies = [
        'com.tecnotree.modules.crmsystem.services'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemHomeViewControllerDefinition = [
        '$scope',
        'customerService',
        definitions.crmSystemHomeViewController
    ];

    var crmSystemDashboardHomeViewControllerDefinition = [
        '$scope',
        '$stateParams',
        '$q',
        'customerService',
        'orderService',
        'orderChartDataTransformationService',
        definitions.crmSystemDashboardHomeViewController
    ];

    var definitions = [{
            name: 'crmSystemHomeViewController',
            definition: crmSystemHomeViewControllerDefinition
        },
        {
            name: 'crmSystemDashboardHomeViewController',
            definition: crmSystemDashboardHomeViewControllerDefinition
        }
    ];

    controllerRegUtils.registerControllers(moduleObject, definitions);
})();
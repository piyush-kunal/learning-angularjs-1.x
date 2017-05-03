(function () {
    'use strict';

    var controllerRegUtils = require('../utilities/register-controllers');
    var ngModuleName = 'com.tecnotree.modules.charting.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies = [];
    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var chartRendererControllerDefinition = [
        '$scope',
        definitions.chartRendererController
    ];

    var controllerDefinitions = [{
        name: 'chartRendererController',
        definition: chartRendererControllerDefinition
    }];

    controllerRegUtils.registerControllers(moduleObject, controllerDefinitions);
})();
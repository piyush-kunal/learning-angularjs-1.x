(function () {
    'use strict';

    var ngModuleName = 'com.gs.modules.charting.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var controllerDefinition =
        [
            '$scope',
            definitions.chartRendererController
        ];

    moduleObject.controller('gsChartRendererController', controllerDefinition);
})();
(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.charting.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies = [];
    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var chartRendererControllerDefinition =
        [
            '$scope',
            definitions.chartRendererController
        ];

    moduleObject.controller('chartRendererController', chartRendererControllerDefinition);
})();
(function () {
    'use strict';

    require('./controllers');

    var ngModuleName = 'com.gs.modules.charting.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.gs.modules.charting.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var chartingDirectiveDefinition =
        [
            definitions.chartingDirective
        ];

    moduleObject.directive('gsChartRenderer', chartingDirectiveDefinition);
})();
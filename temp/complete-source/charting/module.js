(function () {
    'use strict';

    require('./directives');

    var ngModuleName = 'com.gs.modules.charting';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.gs.modules.charting.directives'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var chartingModuleInitializer =
        [
            '$log',
            definitions.initializeChartingModule
        ];

    moduleObject.run(chartingModuleInitializer);
})();
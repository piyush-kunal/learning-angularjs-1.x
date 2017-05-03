(function () {
    'use strict';

    require('./directives');

    var ngModuleName = 'com.intsol.modules.charting';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.intsol.modules.charting.directives'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var chartingModuleInitializer =
        [
            '$log',
            definitions.initializeChartingModule
        ];

    moduleObject.run(chartingModuleInitializer);
})();
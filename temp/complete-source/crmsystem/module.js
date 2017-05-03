(function () {
    'use strict';

    require('ngRadialGauge');
    require('../charting/module');
    require('./directives');
    require('./filters');
    require('./routes');

    var ngModuleName = 'com.gs.modules.crmsystem';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'ngRadialGauge',
            'com.gs.modules.charting',
            'com.gs.modules.crmsystem.directives',
            'com.gs.modules.crmsystem.filters',
            'com.gs.modules.crmsystem.routes'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var moduleInitializer =
        [
            '$log',
            '$rootScope',
            definitions.initializeCrmSystemModule
        ];

    moduleObject.run(moduleInitializer);
})();
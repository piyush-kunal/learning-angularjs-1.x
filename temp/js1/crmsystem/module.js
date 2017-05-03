(function () {
    'use strict';

    require('ngRadialGauge');
    require('./routes');
    require('./directives');
    require('./filters');

    var ngModuleName = 'com.intsol.modules.crmsystem';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'ngRadialGauge',
            'com.intsol.modules.crmsystem.directives',
            'com.intsol.modules.crmsystem.filters',
            'com.intsol.modules.crmsystem.routes'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemInitializerDefinition =
        [
            '$rootScope',
            '$log',
            definitions.initializeCrmSystem
        ];

    moduleObject.run(crmSystemInitializerDefinition);
})();
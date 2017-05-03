(function () {
    'use strict';

    require('../charting/module');
    require('./routes');
    require('./filters');
    require('./directives');

    var ngModuleName = 'com.tecnotree.modules.crmsystem';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies = [
        'com.tecnotree.modules.charting',
        'com.tecnotree.modules.crmsystem.directives',
        'com.tecnotree.modules.crmsystem.filters',
        'com.tecnotree.modules.crmsystem.routes'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefinition = [
        '$log',
        '$rootScope',
        definitions.initializeModule
    ];

    moduleObject.run(moduleInitializerDefinition);
})();
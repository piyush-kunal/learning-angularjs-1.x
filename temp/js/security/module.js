(function () {
    'use strict';

    require('./directives');

    var ngModuleName = 'com.tecnotree.modules.security';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies = [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefinition = [
        '$log',
        definitions.initializeModule
    ];

    moduleObject.run(moduleInitializerDefinition);
})();
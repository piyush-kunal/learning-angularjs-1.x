(function () {
    'use strict';

    require('./directives');

    var ngModuleName = 'com.tecnotree.modules.charting';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies = [
        'com.tecnotree.modules.charting.directives'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var moduleInitializerDefinition = [
        '$log',
        definitions.initializeModule
    ];

    moduleObject.run(moduleInitializerDefinition);

})();
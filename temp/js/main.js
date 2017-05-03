(function () {
    'use strict';

    require('./external-libraries');
    require('./common/module');
    require('./crmsystem/module');

    var ngModuleName = 'com.tecnotree.app';
    var angular = require('angular');
    var definitions = require('./defs/main-defs');

    var ngDependencies = [
        'com.tecnotree.modules.common',
        'com.tecnotree.modules.crmsystem'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefinition = [
        '$log',
        '$rootScope',
        definitions.initializeModule
    ];

    moduleObject.run(moduleInitializerDefinition)

    definitions.bootstrapModule(ngModuleName);
})();
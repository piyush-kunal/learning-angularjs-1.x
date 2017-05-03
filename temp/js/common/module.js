(function () {
    'use strict';

    require('../security/module');
    require('./directives');
    require('./routes');
    require('./decorators');

    var ngModuleName = 'com.tecnotree.modules.common';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies = [
        'com.tecnotree.modules.security.directives',
        'com.tecnotree.modules.common.directives',
        'com.tecnotree.modules.common.routes',
        'com.tecnotree.modules.common.decorators'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefinition = [
        '$log',
        definitions.initializeModule
    ];

    moduleObject.run(moduleInitializerDefinition);
})();
(function () {
    'use strict';

    require('../security/module');
    require('./directives');
    require('./routes');
    require('./decorators');

    var ngModuleName = 'com.intsol.modules.common';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.intsol.modules.security',
            'com.intsol.modules.common.directives',
            'com.intsol.modules.common.routes',
            'com.intsol.modules.common.decorators'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializer =
        [
            '$log',
            definitions.initializeModule
        ];

    moduleObject.run(moduleInitializer);
})();
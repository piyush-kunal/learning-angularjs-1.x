(function () {
    'use strict';

    require('./directives');
    require('./routes');
    require('./decorators');
    require('./interceptors');

    var ngModuleName = 'com.gs.modules.common';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.gs.modules.common.directives',
            'com.gs.modules.common.routes',
            'com.gs.modules.common.decorators',
            'com.gs.modules.common.interceptors'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializer =
        [
            '$log',
            '$window',
            definitions.initializeCommonModule
        ];

    moduleObject.run(moduleInitializer);
})();
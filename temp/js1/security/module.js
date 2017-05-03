(function () {
    'use strict';

    require('./config');
    require('./directives');
    require('./interceptors');

    var ngModuleName = 'com.intsol.modules.security';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.intsol.modules.security.config',
            'com.intsol.modules.security.interceptors',
            'com.intsol.modules.security.directives'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var securityModuleInitializer =
        [
            '$log',
            '$window',
            '$rootScope',
            'authTokenInfo',
            definitions.initializeSecurityModule
        ];

    moduleObject.run(securityModuleInitializer);
})();
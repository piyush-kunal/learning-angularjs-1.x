(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var ngModuleName = 'com.intsol.modules.security.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.intsol.modules.security.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var authenticationServiceDefinition =
        [
            '$resource',
            'authenticationServiceUrl',
            definitions.authenticationService
        ];

    moduleObject.factory('authenticationService', authenticationServiceDefinition);
})();
(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.security.interceptors';
    var angular = require('angular');
    var definitions = require('./defs/interceptor-defs');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var authorizationInterceptorServiceDefinition =
        [
            '$window',
            '$q',
            'authTokenInfo',
            definitions.authorizationInterceptor
        ];

    var configureHttpInterceptorsDefinition =
        [
            '$httpProvider',
            definitions.configureHttpInterceptors
        ]

    moduleObject.factory('authorizationInterceptor', authorizationInterceptorServiceDefinition);
    moduleObject.config(configureHttpInterceptorsDefinition);
})();
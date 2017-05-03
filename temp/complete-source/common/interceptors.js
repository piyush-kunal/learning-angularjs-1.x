(function () {
    'use strict';

    var ngModuleName = 'com.gs.modules.common.interceptors';
    var angular = require('angular');
    var definitions = require('./defs/interceptor-defs');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var interceptorDefinition =
        [
            '$window',
            '$q',
            'gsAuthKey',
            definitions.gsAuthInterceptor
        ];

    var interceptorConfigurationDefinition =
        [
            '$httpProvider',
            definitions.configureHttpInterceptors
        ];

    moduleObject.factory('gsAuthInterceptor', interceptorDefinition);
    moduleObject.config(interceptorConfigurationDefinition);
})();
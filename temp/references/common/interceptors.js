(function () {
    'use strict';

    require('./config');
    require('./services');

    var ngModuleName = 'com.intsol.modules.common.interceptors';
    var angular = require('angular');
    var definitions = require('./defs/interceptor-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common.config',
            'com.intsol.modules.common.services',
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var decoratorDefinition =
        [
            '$httpProvider',
            definitions.configureHttpPipeline
        ];

    var httpInterceptorServiceDefinition =
        [
            '$q',
            '$window',
            definitions.httpInterceptorService
        ];

    moduleObject.factory('intsolBrandInterceptor', httpInterceptorServiceDefinition);
    moduleObject.config(decoratorDefinition);
})();
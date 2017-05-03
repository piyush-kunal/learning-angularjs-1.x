(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var ngModuleName = 'com.gs.modules.common.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.gs.modules.common.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var serviceDefinition =
        [
            '$resource',
            'subHeadingsServiceUrl',
            definitions.subHeadingsService
        ];

    var authServiceDefinition =
        [
            '$resource',
            'authServiceUrl',
            definitions.authenticationService
        ];

    moduleObject.factory('gsSubHeadingsService', serviceDefinition);
    moduleObject.factory('gsAuthenticationService', authServiceDefinition);
})();
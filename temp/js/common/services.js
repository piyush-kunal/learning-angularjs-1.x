(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var serviceRegUtils = require('../utilities/register-services');

    var ngModuleName = 'com.tecnotree.modules.common.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies = [
        'ngResource',
        'com.tecnotree.modules.common.config'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var subHeadingServiceDefinition = [
        '$resource',
        'subHeadingServiceUrl',
        definitions.subHeadingService
    ];

    var serviceDefinitions = [{
        name: 'subHeadingService',
        definition: subHeadingServiceDefinition
    }];

    serviceRegUtils.registerFactories(moduleObject, serviceDefinitions);
})();
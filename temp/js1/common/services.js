(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var ngModuleName = 'com.intsol.modules.common.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.intsol.modules.common.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var subHeadingsServiceDefinition =
        [
            '$resource',
            'subHeadingsServiceUrl',
            definitions.subHeadingsService
        ];

    moduleObject.factory('subHeadingsService', subHeadingsServiceDefinition);
})();
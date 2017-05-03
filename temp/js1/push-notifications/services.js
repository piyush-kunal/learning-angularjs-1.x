(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.push-notifications.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var notificationUrlProviderServiceDefinition =
        [
            '$window',
            definitions.notificationUrlProviderService
        ];

    var notificationServiceDefinition =
        [
            'notificationUrlProviderService',
            definitions.notificationService
        ];

    moduleObject.factory('notificationUrlProviderService', notificationUrlProviderServiceDefinition);
    moduleObject.service('notificationService', notificationServiceDefinition);
})();
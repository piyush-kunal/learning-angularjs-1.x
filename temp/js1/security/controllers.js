(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.intsol.modules.security.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.intsol.modules.security.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var authenticationControllerDefinition =
        [
            '$scope',
            '$rootScope',
            '$window',
            '$state',
            'authenticationService',
            'authTokenInfo',
            'postLogoutRedirectDetails',
            definitions.authenticationController
        ];

    moduleObject.controller('authenticationController', authenticationControllerDefinition);
})();
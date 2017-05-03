(function () {
    'use strict';

    var ngModuleName = 'com.tecnotree.modules.security.config';
    var angular = require('angular');
    var ngDependencies = [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('securityDirTemplateUrls', {
        loginPanel: '/js/security/partials/directives/login-panel.html'
    });
})();
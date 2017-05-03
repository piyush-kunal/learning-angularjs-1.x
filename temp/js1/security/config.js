(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.security.config';
    var angular = require('angular');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('authTokenInfo', {
        authTokenKey: 'intsolatk'
    });

    moduleObject.constant('securityDirTemplateUrls', {
        loginPanel: 'js/security/partials/directives/login-panel.html'
    });

    moduleObject.constant('authenticationServiceUrl', '/authenticate');
    moduleObject.constant('postLogoutRedirectDetails', {
        redirectTo: 'home'
    });
})();
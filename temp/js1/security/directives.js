(function () {
    'use strict';

    require('./config');
    require('./controllers');

    var ngModuleName = 'com.intsol.modules.security.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.intsol.modules.security.config',
            'com.intsol.modules.security.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var loginPanelDirectiveDefinition =
        [
            'securityDirTemplateUrls',
            definitions.loginPanelDirective
        ];

    moduleObject.directive('intsolLoginPanel', loginPanelDirectiveDefinition);
})();
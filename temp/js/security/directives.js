(function () {
    'use strict';

    require('./config');

    var directiveRegUtils = require('../utilities/register-directives');
    var ngModuleName = 'com.tecnotree.modules.security.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies = [
        'com.tecnotree.modules.security.config'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var loginPanelDirectiveDefinition = [
        'securityDirTemplateUrls',
        definitions.loginPanelDirective
    ];

    var directiveDefinitions = [{
        name: 'loginPanel',
        definition: loginPanelDirectiveDefinition
    }];

    directiveRegUtils.registerDirectives(moduleObject, directiveDefinitions);
})();
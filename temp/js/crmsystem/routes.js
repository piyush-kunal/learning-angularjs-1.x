(function () {
    'use strict';

    require('angular-ui-router');
    require('./config');
    require('./controllers');

    var ngModuleName = 'com.tecnotree.modules.crmsystem.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');

    var ngDependencies = [
        'ui.router',
        'com.tecnotree.modules.crmsystem.config',
        'com.tecnotree.modules.crmsystem.controllers'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemRouterConfigurationDefinition = [
        '$stateProvider',
        'crmSystemViewTemplateUrls',
        definitions.configureCrmSystemRouter
    ];

    moduleObject.config(crmSystemRouterConfigurationDefinition);
})();
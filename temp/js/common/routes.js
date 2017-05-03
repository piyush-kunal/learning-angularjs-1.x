(function () {
    'use strict';

    require('angular-ui-router');
    require('./config');
    require('./controllers');

    var ngModuleName = 'com.tecnotree.modules.common.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');

    var ngDependencies = [
        'ui.router',
        'com.tecnotree.modules.common.config',
        'com.tecnotree.modules.common.controllers'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var routerConfigurationDefinition = [
        '$stateProvider',
        '$urlRouterProvider',
        'commonViewTemplateUrls',
        definitions.configureRouter
    ];

    moduleObject.config(routerConfigurationDefinition);
})();
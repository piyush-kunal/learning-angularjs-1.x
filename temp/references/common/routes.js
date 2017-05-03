(function () {
    'use strict';

    require('angular-ui-router');
    require('./controllers');

    var ngModuleName = 'com.intsol.modules.common.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');
    var ngDependencies =
        [
            'ui.router',
            'com.intsol.modules.common.config',
            'com.intsol.modules.common.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var routeDefinition =
        [
            '$stateProvider',
            '$urlRouterProvider',
            'commonViewTemplateUrls',
            definitions.initializeCommonRouter
        ];

    moduleObject.config(routeDefinition);
})();
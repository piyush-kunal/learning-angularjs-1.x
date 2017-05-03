(function () {
    'use strict';

    require('angular-ui-router');
    require('./config');
    require('./controllers');

    var ngModuleName = 'com.gs.modules.common.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');

    var ngDependencies =
        [
            'ui.router',
            'com.gs.modules.common.config',
            'com.gs.modules.common.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var routeDefinition =
        [
            '$stateProvider',
            '$urlRouterProvider',
            'commonViewTemplateUrls',
            definitions.initializeCommonRoutes
        ];

    moduleObject.config(routeDefinition);
})();
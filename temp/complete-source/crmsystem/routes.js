(function () {
    'use strict';

    require('angular-ui-router');
    require('./config');
    require('./controllers');

    var ngModuleName = 'com.gs.modules.crmsystem.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');

    var ngDependencies =
        [
            'ui.router',
            'com.gs.modules.crmsystem.config',
            'com.gs.modules.crmsystem.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemRouterConfiguration =
        [
            '$stateProvider',
            'crmSystemViewTemplateUrls',
            definitions.configureCrmSystemRouter
        ];

    moduleObject.config(crmSystemRouterConfiguration);
})();
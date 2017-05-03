(function () {
    'use strict';

    require('angular-ui-router');
    require('./config');
    require('./controllers');

    var ngModuleName = 'com.intsol.modules.crmsystem.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');

    var ngDependencies =
        [
            'ui.router',
            'com.intsol.modules.crmsystem.config',
            'com.intsol.modules.crmsystem.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemRouterDefinition =
        [
            '$stateProvider',
            'crmSystemViewTemplateUrls',
            definitions.configureCrmSystemRouter
        ];

    moduleObject.config(crmSystemRouterDefinition);
})();
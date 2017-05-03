(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.gs.modules.common.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.gs.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var controllerDefinition =
        [
            '$scope',
            'gsSubHeadingsService',
            definitions.gsHomeViewController
        ];

    var loginPanelControllerDefinition =
        [
            '$scope',
            '$rootScope',
            '$window',
            '$state',
            'gsAuthenticationService',
            'gsAuthKey',
            definitions.loginPanelController
        ];

    var navigationPanelControllerDefinition =
        [
            '$scope',
            '$rootScope',
            definitions.navigationPanelController
        ];

    moduleObject.controller('gsHomeViewController', controllerDefinition);
    moduleObject.controller('gsLoginPanelController', loginPanelControllerDefinition);
    moduleObject.controller('gsNavigationPanelController', navigationPanelControllerDefinition);
})();
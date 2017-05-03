(function () {
    'use strict';

    require('./services');

    var controllerRegUtils = require('../utilities/register-controllers');
    var ngModuleName = 'com.tecnotree.modules.common.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies = [
        'com.tecnotree.modules.common.services'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var homeViewControllerDefinition = [
        '$scope',
        'subHeadingService',
        definitions.homeViewController
    ];

    var controllerDefinitions = [{
        name: 'homeViewController',
        definition: homeViewControllerDefinition
    }];

    controllerRegUtils.registerControllers(moduleObject, controllerDefinitions);
})();
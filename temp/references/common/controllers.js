(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.intsol.modules.common.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var controllerDefinition =
        [
            '$scope',
            'intsolSubHeadingsService',
            definitions.HomeViewController
        ];

    moduleObject.controller('intsolHomeViewController', controllerDefinition);
})();
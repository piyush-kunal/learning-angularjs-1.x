(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.intsol.modules.common.decorators';
    var angular = require('angular');
    var definitions = require('./defs/decorator-defs');

    var ngDependencies =
        [
            'com.intsol.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var decoratorServiceDefinition =
        [
            '$provide',
            definitions.configureDecoratorService
        ];

    moduleObject.config(decoratorServiceDefinition);
})();
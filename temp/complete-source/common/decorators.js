(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.gs.modules.common.decorators';
    var angular = require('angular');
    var definitions = require('./defs/decorator-defs');

    var ngDependencies =
        [
            'com.gs.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var decoratorConfiguration =
        [
            '$provide',
            definitions.configureServiceDecorators
        ];

    var logServiceDefinition =
        [
            '$window',
            definitions.logService
        ];

    var exceptionHandlerServiceDefinition =
        [
            '$log',
            definitions.exceptionHandlerService
        ];

    moduleObject.config(decoratorConfiguration);
    moduleObject.factory('$log', logServiceDefinition);
    moduleObject.factory('$exceptionHandler', exceptionHandlerServiceDefinition);
})();
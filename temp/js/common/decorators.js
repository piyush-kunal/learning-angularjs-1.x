(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.tecnotree.modules.common.decorators';
    var angular = require('angular');
    var definitions = require('./defs/decorator-defs');

    var ngDependencies = [
        'com.tecnotree.modules.common.services'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var decoratorConfigurationDefinition = [
        '$provide',
        definitions.configureServiceDecorators
    ];

    moduleObject.config(decoratorConfigurationDefinition);
})();
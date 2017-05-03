(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.building-blocks.decorators';
    var angular = require('angular');
    var definitions = require('./defs/decorator-defs');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var configureDecoratorsDefinition =
        [
            '$provide',
            definitions.configureDecorators
        ]

    moduleObject.config(configureDecoratorsDefinition);
})();
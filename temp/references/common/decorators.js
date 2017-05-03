(function () {
    'use strict';

    require('./config');
    require('./services');

    var ngModuleName = 'com.intsol.modules.common.decorators';
    var angular = require('angular');
    var definitions = require('./defs/decorator-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common.config',
            'com.intsol.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var decoratorDefinition =
        [
            '$provide',
            definitions.configureSubHeadingsDecorator
        ];

    moduleObject.config(decoratorDefinition);
})();
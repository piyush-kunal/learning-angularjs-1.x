(function () {
    'use strict';

    require('./config');

    var ngModuleName = 'com.intsol.modules.common.filters';
    var angular = require('angular');
    var definitions = require('./defs/filter-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var filterDefinition =
        [
            'symbols',
            definitions.symbolFilter
        ];

    moduleObject.filter('intsolSymbol', filterDefinition);
})();
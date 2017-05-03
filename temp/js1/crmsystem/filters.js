(function () {
    'use strict';

    require('./config');

    var ngModuleName = 'com.intsol.modules.crmsystem.filters';
    var angular = require('angular');
    var definitions = require('./defs/filter-defs');

    var ngDependencies =
        [
            'com.intsol.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var customerImageUrlFilterDefinition =
        [
            'customerImageBaseUrl',
            definitions.customerImageUrlFilter
        ];

    var statusSymbolFilterDefinition =
        [
            'statusSymbols',
            definitions.statusSymbolFilter
        ];

    var stockHealthStatusFilterDefinition =
        [
            definitions.stockHealthStatusFilter
        ];

    moduleObject.filter('customerImageUrl', customerImageUrlFilterDefinition);
    moduleObject.filter('statusSymbol', statusSymbolFilterDefinition);
    moduleObject.filter('stockHealthStatus', stockHealthStatusFilterDefinition);
})();
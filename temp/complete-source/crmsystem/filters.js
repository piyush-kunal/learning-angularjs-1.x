(function () {
    'use strict';

    require('./config');

    var ngModuleName = 'com.gs.modules.crmsystem.filters';
    var angular = require('angular');
    var definitions = require('./defs/filter-defs');

    var ngDependencies =
        [
            'com.gs.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var photoUrlFilterDefinition =
        [
            'photoBaseUrl',
            definitions.photoUrlFilter
        ];

    var stockSymbolFilterDefinition =
        [
            'symbols',
            definitions.stockHealthStatusFilter
        ];

    moduleObject.filter('gsPhotoUrl', photoUrlFilterDefinition);
    moduleObject.filter('gsStockHealthStatus', stockSymbolFilterDefinition);
})();
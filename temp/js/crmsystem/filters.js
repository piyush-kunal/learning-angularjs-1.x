(function () {
    'use strict';

    require('./config');

    var filterRegUtils = require('../utilities/register-filters');
    var ngModuleName = 'com.tecnotree.modules.crmsystem.filters';
    var angular = require('angular');
    var definitions = require('./defs/filter-defs');

    var ngDependencies = [
        'com.tecnotree.modules.crmsystem.config'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var photoUrlFilterDefinition = [
        'photoBaseUrl',
        definitions.photoUrlFilter
    ];

    var symbolFilterDefinition = [
        'symbols',
        definitions.symbolFilter
    ];

    var thresholdFilterDefinition = [
        definitions.thresholdFilter
    ];

    var definitions = [{
            name: 'photoUrl',
            definition: photoUrlFilterDefinition
        },
        {
            name: 'symbol',
            definition: symbolFilterDefinition
        },
        {
            name: 'threshold',
            definition: thresholdFilterDefinition
        }
    ];

    filterRegUtils.registerFilters(moduleObject, definitions);
})();
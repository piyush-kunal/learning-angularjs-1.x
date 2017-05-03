(function () {
    'use strict';

    require('./controllers');

    var directiveRegUtils = require('../utilities/register-directives');
    var ngModuleName = 'com.tecnotree.modules.charting.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies = [
        'com.tecnotree.modules.charting.controllers'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var chartRendererDirectiveDefinition = [
        definitions.chartRendererDirective
    ];

    var definitions = [{
        name: 'chartRenderer',
        definition: chartRendererDirectiveDefinition
    }];

    directiveRegUtils.registerDirectives(moduleObject, definitions);
})();
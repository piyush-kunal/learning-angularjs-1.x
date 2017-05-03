/**
 * Created by Ramkumar on 4/11/2016.
 */

(function () {

    'use strict';

    require('./common/module');
    require('./crmsystem/module');

    var angular = require('angular');
    var definitions = require('./defs/app-defs');

    var moduleName = 'com.gs.app';
    var moduleDependencies =
        [
            'com.gs.modules.common',
            'com.gs.modules.crmsystem'
        ];

    var moduleObject = angular.module(moduleName, moduleDependencies);
    var appInitializer =
        [
            '$log',
            definitions.initializeApp
        ];

    var locationProviderConfiguration =
        [
            '$locationProvider',
            definitions.configureLocationProvider
        ];

    moduleObject.config(locationProviderConfiguration);
    moduleObject.run(appInitializer);
})();
(function () {
    'use strict';

    require('jquery-browserify');
    require('bootstrap');
    require('./building-blocks/module');
    require('./common/module');
    require('./crmsystem/module');

    var ngModuleName = 'com.intsol.app';

    var angular = require('angular');

    require('angular-ui-router-anim-in-out');

    var definitions = require('./defs/main-defs');

    var ngDependencies =
        [
            'anim-in-out',
            'com.intsol.modules.building-blocks',
            'com.intsol.modules.common',
            'com.intsol.modules.crmsystem'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var initializer =
        [
            '$log',
            '$rootScope',
            definitions.initializeApp
        ];

    var seoSettingsProvider =
        [
            '$locationProvider',
            definitions.configureSeoSettings
        ];

    moduleObject.run(initializer);
    moduleObject.config(seoSettingsProvider);

    angular.element(document)
        .ready(definitions.bootstrapApp);
})();
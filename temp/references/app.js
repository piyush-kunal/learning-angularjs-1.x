/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {
    'use strict';

    require('./common/module');

    var ngModuleName = 'com.intsol.app';
    var angular = require('angular');
    var definitions = require('./defs/app-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common'
        ];

    var runInitializer = ['$log', definitions.initialize];

    angular
        .module(ngModuleName, ngDependencies)
        .run(runInitializer);
})();
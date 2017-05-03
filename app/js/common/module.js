(function () {
    'use strict';

    var ngModuleName = 'com.tecnotree.modules.common';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefination =
      [
        '$log',
        definitions.initializeModule
      ];

    moduleObject.run(moduleInitializerDefination);

})();

(function () {
    'use strict';

    require('./common/module');

    var ngModuleName = 'com.tecnotree.app';
    var angular = require('angular');
    var definitions = require('./defs/main-defs');

    var ngDependencies =
        [
          'com.tecnotree.modules.common'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefination =
      [
          '$log',
          '$rootScope',
          definitions.initializeModule
      ];
    moduleObject.run(moduleInitializerDefination);

    definitions.bootstrapModule(ngModuleName);
})();

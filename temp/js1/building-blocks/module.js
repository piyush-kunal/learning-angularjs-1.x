(function () {
    'use strict';

    require('./decorators');

    var ngModuleName = 'com.intsol.modules.building-blocks';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.intsol.modules.building-blocks.decorators'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var buildingBlocksModuleInitializer =
        [
            '$log',
            definitions.initializeBuildingBlocksModule
        ];

    moduleObject.run(buildingBlocksModuleInitializer);
})();
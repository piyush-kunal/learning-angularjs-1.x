
(function() {

    require('./config');
    require('./directives');
    require('./routes');
    require('./filters');
    require('./decorators');
    require('./interceptors');

    var ngModuleName = 'com.intsol.modules.common';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common.config',
            'com.intsol.modules.common.directives',
            'com.intsol.modules.common.routes',
            'com.intsol.modules.common.filters',
            'com.intsol.modules.common.decorators',
            'com.intsol.modules.common.interceptors'
        ];

    var runInitializer = ['$log', '$window', definitions.initialize];

    angular
        .module(ngModuleName, ngDependencies)
        .run(runInitializer);
})();
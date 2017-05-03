(function () {
    'use strict';

    require('./services');
    require('./config');

    var ngModuleName = 'com.intsol.modules.push-notifications';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.intsol.modules.push-notifications.config',
            'com.intsol.modules.push-notifications.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var pushNotificationsModuleInitializer =
        [
            '$log',
            definitions.initializePushNotificationsModule
        ];

    moduleObject.run(pushNotificationsModuleInitializer);
})();
(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.push-notifications.config';
    var angular = require('angular');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('pushNotificationEvents', {
        NEW_CUSTOMER_RECORD: 'newCustomerRecord'
    });
})();
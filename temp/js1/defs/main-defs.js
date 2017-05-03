(function () {
    'use strict';

    var angular = require('angular');

    var definitions = {
        initializeApp: function (logService, globalViewModel) {
            var validation = logService && globalViewModel;

            if (validation) {
                globalViewModel.appStartTime = new Date();
                globalViewModel.isAuthenticated = false;

                logService.info("IntSol Application Initialized!");
            }
        },
        bootstrapApp: function () {
            var d3 = require('d3');

            window.d3 = d3;

            var domElement = document;
            var module = ['com.intsol.app'];

            var validation = domElement && module;

            if (validation) {
                angular.bootstrap(domElement, module);
            }
        },
        configureSeoSettings: function (locationProvider) {
            if (locationProvider) {
                locationProvider.html5Mode(false);
            }
        }
    };

    module.exports = definitions;
})();
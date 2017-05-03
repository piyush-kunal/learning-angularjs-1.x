/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {
    'use strict';

    require('jquery-browserify');
    require('bootstrap');
    require('./app');

    var angular = require('angular');

    angular.element(document).ready(function () {
        var modules = ['com.intsol.app'];

        angular.bootstrap(document, modules);
    });

    var superVariable = 100;
    console.log(superVariable);
})();
/**
 * Created by Ramkumar on 4/11/2016.
 */

(function () {

    'use strict';

    require('jquery-browserify');
    require('bootstrap');
    require('./app');

    var angular = require('angular');
    var definitions = require('./defs/main-defs');

    angular
        .element(document)
        .ready(definitions.bootstrapCallback);

    var superVariable = 10;

    console.log(superVariable);
})();
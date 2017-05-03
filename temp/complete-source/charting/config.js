/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {
    'use strict';

    var ngModuleName = $.ns('common', 'configuration');
    var angular = require('angular');
    var ngDependencies =
        [];

    var module = angular.module(ngModuleName, ngDependencies);

    module.constant('dataServiceUrl', 'data/data.json');

    module.constant('commonViewTemplateUrls', {
        home: '/js/common/partials/views/home.html'
    });

    module.constant('commonDirTemplateUrls', {
        header: '/js/common/partials/directives/header.html',
        footer: '/js/common/partials/directives/header.html',
        navigation: '/js/common/partials/directives/header.html'
    });
})();
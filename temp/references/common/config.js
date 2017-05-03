/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.common.config';
    var angular = require('angular');
    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('dataServiceUrl', 'data/data.json');

    moduleObject.constant('commonViewTemplateUrls', {
        home: '/js/common/partials/views/home.html'
    });

    moduleObject.constant('commonDirTemplateUrls', {
        header: '/js/common/partials/directives/header.html',
        footer: '/js/common/partials/directives/footer.html',
        navigation: '/js/common/partials/directives/navigation.html',
        subHeadingViewer: '/js/common/partials/directives/sub-heading-viewer.html'
    });

    moduleObject.constant('symbols', {
        check: '\u2713',
        cross: '\u2718'
    });
})();
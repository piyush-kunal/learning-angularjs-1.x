(function () {
    'use strict';

    var ngModuleName = 'com.tecnotree.modules.common.config';
    var angular = require('angular');

    var ngDependencies = [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('commonDirTemplateUrls', {
        header: 'js/common/partials/directives/header.html',
        navigation: 'js/common/partials/directives/navigation.html',
        footer: 'js/common/partials/directives/footer.html',
        subHeadingViewer: 'js/common/partials/directives/sub-heading-viewer.html'
    });

    moduleObject.constant('commonViewTemplateUrls', {
        home: 'js/common/partials/views/home.html',
        aboutus: 'js/common/partials/views/aboutus.html'
    });

    moduleObject.constant('subHeadingServiceUrl', 'data/data.json');
})();
(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.common.config';
    var angular = require('angular');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('commonDirTemplateUrls', {
        header: 'js/common/partials/directives/header.html',
        footer: 'js/common/partials/directives/footer.html',
        navigationPanel: 'js/common/partials/directives/navigation-panel.html',
        subHeadingsViewer: 'js/common/partials/directives/subheadings-viewer.html'
    });

    moduleObject.constant('commonViewTemplateUrls', {
        home: 'js/common/partials/views/home.html',
        about: 'js/common/partials/views/about.html'
    });

    moduleObject.constant('subHeadingsServiceUrl', 'data/data.json');
})();
(function () {
    'use strict';

    /* Required Packages */
    // require('');

    var ngModuleName = 'com.gs.modules.common.config';
    var angular = require('angular');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    /* Angular Definitions */

    moduleObject.constant('commonDirTemplateUrls', {
        header: 'js/common/partials/directives/header.html',
        navigationPanel: 'js/common/partials/directives/navigation-panel.html',
        loginPanel: 'js/common/partials/directives/login-panel.html',
        footer: 'js/common/partials/directives/footer.html',
        subHeadingViewer: 'js/common/partials/directives/sub-heading-viewer.html'
    });

    moduleObject.constant('commonViewTemplateUrls', {
        home: 'js/common/partials/views/home.html',
        about: 'js/common/partials/views/about.html'
    });

    moduleObject.constant('subHeadingsServiceUrl', 'data/data.json');
    moduleObject.constant('authServiceUrl', '/authenticate');
    moduleObject.constant('gsAuthKey', 'gsat');
})();
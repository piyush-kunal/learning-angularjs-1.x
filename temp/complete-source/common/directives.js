(function () {
    'use strict';

    /* Required Packages */
    require('./config');

    var ngModuleName = 'com.gs.modules.common.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs'); // Include Definition Files Here ...

    var ngDependencies =
        [
            'com.gs.modules.common.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    /* Angular Definitions */

    var headerDirective = ['commonDirTemplateUrls', definitions.initializeHeaderDirective];
    var navigationPanelDirective = ['commonDirTemplateUrls', definitions.initializeNavigationPanelDirective];
    var loginPanelDirective = ['commonDirTemplateUrls', definitions.initializeLoginPanelDirective];
    var footerDirective = ['commonDirTemplateUrls', definitions.initializeFooterDirective];
    var subHeadingViewerDirective =
        [
            'commonDirTemplateUrls',
            definitions.initializeSubHeadingViewerDirective
        ];

    moduleObject.directive('gsCommonHeader', headerDirective);
    moduleObject.directive('gsCommonNavigationPanel', navigationPanelDirective);
    moduleObject.directive('gsCommonLoginPanel', loginPanelDirective);
    moduleObject.directive('gsCommonFooter', footerDirective);
    moduleObject.directive('gsCommonSubHeadingViewer', subHeadingViewerDirective);
})();
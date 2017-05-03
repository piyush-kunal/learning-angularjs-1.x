(function () {
    'use strict';

    require('./config');

    var ngModuleName = 'com.intsol.modules.common.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');
    var ngDependencies =
        [
            'com.intsol.modules.common.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var headerDirective = ['commonDirTemplateUrls', definitions.headerDirective];
    var footerDirective = ['commonDirTemplateUrls', definitions.footerDirective];
    var navigationDirective = ['commonDirTemplateUrls', definitions.navigationDirective];
    var subHeadingViewerDirective = ['commonDirTemplateUrls', definitions.subHeadingViewerDirective];

    moduleObject.directive('intsolCommonHeader', headerDirective);
    moduleObject.directive('intsolCommonNavigation', navigationDirective);
    moduleObject.directive('intsolCommonFooter', footerDirective);
    moduleObject.directive('intsolCommonSubHeadingViewer', subHeadingViewerDirective);
})();
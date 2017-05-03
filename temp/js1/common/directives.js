(function () {
    'use strict';

    require('./config');
    require('./controllers');

    var ngModuleName = 'com.intsol.modules.common.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.intsol.modules.common.config',
            'com.intsol.modules.common.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var headerDirectiveDefinition =
        [
            'commonDirTemplateUrls',
            definitions.headerDirective
        ];

    var footerDirectiveDefinition =
        [
            'commonDirTemplateUrls',
            definitions.footerDirective
        ];

    var navigationPanelDirectiveDefinition =
        [
            'commonDirTemplateUrls',
            definitions.navigationPanelDirective
        ];

    var subHeadingsViewerDirectiveDefinition =
        [
            'commonDirTemplateUrls',
            definitions.subHeadingsViewerDirective
        ];

    moduleObject.directive('intsolCommonHeader', headerDirectiveDefinition);
    moduleObject.directive('intsolCommonFooter', footerDirectiveDefinition);
    moduleObject.directive('intsolCommonNavigationPanel', navigationPanelDirectiveDefinition);
    moduleObject.directive('intsolCommonSubHeadingsViewer', subHeadingsViewerDirectiveDefinition);
})();
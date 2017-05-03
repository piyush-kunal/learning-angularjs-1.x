(function () {
    'use strict';

    require('./config');

    var directiveRegUtils = require('../utilities/register-directives');
    var ngModuleName = 'com.tecnotree.modules.common.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies = [
        'com.tecnotree.modules.common.config'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var headerDirectiveDefinition = [
        'commonDirTemplateUrls',
        definitions.headerDirective
    ];

    var navigationDirectiveDefinition = [
        'commonDirTemplateUrls',
        definitions.navigationDirective
    ];

    var footerDirectiveDefinition = [
        'commonDirTemplateUrls',
        definitions.footerDirective
    ];

    var subHeadingViewerDirectiveDefinition = [
        'commonDirTemplateUrls',
        definitions.subHeadingViewerDirective
    ];

    var directiveDefinitions = [{
            name: 'tecnotreeHeader',
            definition: headerDirectiveDefinition
        },
        {
            name: 'tecnotreeNavigation',
            definition: navigationDirectiveDefinition
        },
        {
            name: 'tecnotreeFooter',
            definition: footerDirectiveDefinition
        },
        {
            name: 'tecnotreeSubHeadingViewer',
            definition: subHeadingViewerDirectiveDefinition
        },
    ];

    directiveRegUtils.registerDirectives(moduleObject, directiveDefinitions);
})();
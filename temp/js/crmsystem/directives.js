(function () {
    'use strict';

    require('./config');

    var directiveRegUtils = require('../utilities/register-directives');

    var ngModuleName = 'com.tecnotree.modules.crmsystem.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies = [
        'com.tecnotree.modules.crmsystem.config'
    ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var customerViewerDirectiveDefinition = [
        'crmSystemDirTemplateUrls',
        definitions.customerViewerDirective
    ];

    var customerDetailViewerDirectiveDefinition = [
        'crmSystemDirTemplateUrls',
        definitions.customerDetailViewerDirective
    ];

    var customerSearcPanelDirectiveDefinition = [
        'crmSystemDirTemplateUrls',
        definitions.customerSearchPanelDirective
    ];

    var orderViewerDirectiveDefinition = [
        'crmSystemDirTemplateUrls',
        definitions.orderViewerDirective
    ];

    var definitions = [{
            name: 'customerViewer',
            definition: customerViewerDirectiveDefinition
        },
        {
            name: 'customerDetailViewer',
            definition: customerDetailViewerDirectiveDefinition
        },
        {
            name: 'customerSearchPanel',
            definition: customerSearcPanelDirectiveDefinition
        },
        {
            name: 'orderViewer',
            definition: orderViewerDirectiveDefinition
        }
    ];

    directiveRegUtils.registerDirectives(moduleObject, definitions);
})();
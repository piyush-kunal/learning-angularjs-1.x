(function () {
    'use strict';

    var ngModuleName = 'com.tecnotree.modules.crmsystem.config';
    var angular = require('angular');
    var ngDependencies = [];
    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('crmSystemDirTemplateUrls', {
        customerViewer: 'js/crmsystem/partials/directives/customer-viewer.html',
        customerDetailViewer: 'js/crmsystem/partials/directives/customer-detail-viewer.html',
        customerSearchPanel: 'js/crmsystem/partials/directives/customer-search-panel.html',
        orderViewer: 'js/crmsystem/partials/directives/order-viewer.html'
    });

    moduleObject.constant('crmSystemViewTemplateUrls', {
        crmSystemHome: 'js/crmsystem/partials/views/crm-system-home.html',
        crmSystemDashboardHome: 'js/crmsystem/partials/views/crm-system-dashboard-home.html'
    });

    moduleObject.constant('crmSystemServiceUrls', {
        baseUrl: '/api',
        customers: {
            baseUrl: '/customers',
            queryAndSave: '/:customerId'
        },
        orders: {
            baseUrl: '/orders',
            queryByCustomerId: '/:customerId'
        }
    });

    moduleObject.constant('photoBaseUrl', 'images/people');
    moduleObject.constant('symbols', {
        check: '\u2713',
        cross: '\u2718'
    });
})();
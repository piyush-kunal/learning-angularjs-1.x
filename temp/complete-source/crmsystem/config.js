(function () {
    'use strict';

    var ngModuleName = 'com.gs.modules.crmsystem.config';
    var angular = require('angular');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('crmSystemViewTemplateUrls', {
        crmSystemHome: 'js/crmsystem/partials/views/crm-system-home.html',
        crmSystemDashboardHome: 'js/crmsystem/partials/views/crm-system-dashboard-home.html',
        crmSystemNewCustomerHome: 'js/crmsystem/partials/views/crm-system-new-customer-home.html'
    });

    moduleObject.constant('crmSystemDirTemplateUrls', {
        customerThumbnailViewer: 'js/crmsystem/partials/directives/customer-thumbnail-viewer.html',
        customerSearchPanel: 'js/crmsystem/partials/directives/customer-search-panel.html',
        customerDetailViewer: 'js/crmsystem/partials/directives/customer-detail-viewer.html',
        orderViewer: 'js/crmsystem/partials/directives/order-viewer.html',
        stockViewer: 'js/crmsystem/partials/directives/stock-viewer.html',
        dashboardSwitchPanel: 'js/crmsystem/partials/directives/dashboard-switch-panel.html'
    });

    moduleObject.constant('crmSystemServiceUrls', {
        baseUrl: '/api',
        customers: {
            baseUrl: '/customers',
            queryAndSave: '/:id'
        },
        orders: {
            baseUrl: '/orders',
            queryAndSave: '/:customerId'
        }
    });

    moduleObject.constant('photoBaseUrl', 'images/people');
    moduleObject.constant('symbols', {
        check: '\u2713',
        cross: '\u2718'
    });

    moduleObject.constant('crmSystemEvents', {
        DASHBOARD_SWITCH: 'dashboardSwitchEvent'
    });

    moduleObject.constant('redirectDetails', {
        redirectTo: 'crmsystem',
        timeoutPeriod: 4000
    });
})();
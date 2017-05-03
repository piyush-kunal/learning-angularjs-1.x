(function () {
    'use strict';

    var ngModuleName = 'com.intsol.modules.crmsystem.config';
    var angular = require('angular');

    var ngDependencies =
        [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('crmSystemDirTemplateUrls', {
        customerViewer: 'js/crmsystem/partials/directives/customer-thumbnail-viewer.html',
        customerSearchPanel: 'js/crmsystem/partials/directives/customer-search-panel.html',
        customerDetailViewer: 'js/crmsystem/partials/directives/customer-detail-viewer.html',
        orderViewer: 'js/crmsystem/partials/directives/order-viewer.html',
        orderChartViewer: 'js/crmsystem/partials/directives/order-chart-viewer.html',
        stockViewer: 'js/crmsystem/partials/directives/stock-viewer.html',
        stockHistoryViewer: 'js/crmsystem/partials/directives/stock-history-viewer.html',
        dashboardSwitchPanel: 'js/crmsystem/partials/directives/dashboard-switch-panel.html',
        newCustomerForm: 'js/crmsystem/partials/directives/new-customer-form.html'
    });

    moduleObject.constant('crmSystemViewTemplateUrls', {
        crmSystemHome: 'js/crmsystem/partials/views/crm-system-home.html',
        crmSystemDashboardHome: 'js/crmsystem/partials/views/crm-system-dashboard-home.html',
        newCustomerHome: 'js/crmsystem/partials/views/new-customer-home.html'
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

    moduleObject.constant('customerImageBaseUrl', '/images/people');
    moduleObject.constant('statusSymbols', {
        active: '\u2713',
        inactive: '\u2718'
    });

    moduleObject.constant('defaultRefreshInterval', 4000);
    moduleObject.constant('crmSystemEvents', {
        DASHBOARD_SWITCH_EVENT: 'crmSystemDashboardSwitchEvent',
        NEW_CUSTOMER_RECORD: 'newCustomerRecordSavedEvent'
    });

    moduleObject.constant('redirectDetails', {
        redirectTo: 'crmsystem',
        timeoutPeriod: 5000
    });
})();
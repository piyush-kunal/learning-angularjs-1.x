(function () {
    'use strict';

    var definitions = {
        configureCrmSystemRouter: function (stateProvider, templateUrls) {
            var validation = stateProvider && templateUrls;

            if (validation) {
                stateProvider.state('crmsystem', {
                    url: '/crm-system',
                    templateUrl: function () {
                        return templateUrls.crmSystemHome;
                    },
                    controller: 'crmSystemHomeViewController'
                });

                stateProvider.state('crmdashboard', {
                    url: '/crm-dashboard/:customerId',
                    templateUrl: function () {
                        return templateUrls.crmSystemDashboardHome;
                    },
                    controller: 'crmSystemDashboardHomeViewController'
                });

                stateProvider.state('newcustomer', {
                    url: '/new-customer',
                    templateUrl: function () {
                        return templateUrls.newCustomerHome;
                    },
                    controller: 'newCustomerHomeViewController'
                });
            }
        }
    };

    module.exports = definitions;
})();
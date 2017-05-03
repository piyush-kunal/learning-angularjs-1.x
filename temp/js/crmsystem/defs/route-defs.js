(function () {
    'use strict';

    var argumentValidationUtils = require('../../utilities/argument-validators');

    var definitions = {
        configureCrmSystemRouter: function (stateProvider, templateUrls) {
            var validation = argumentValidationUtils.validateArguments(arguments);

            if (validation) {
                var states = [{
                        name: 'crmSystemHome',
                        url: '/crm-system',
                        templateUrl: templateUrls.crmSystemHome,
                        controller: 'crmSystemHomeViewController'
                    },
                    {
                        name: 'crmSystemDashboardHome',
                        url: '/crm-system-dashboard/:customerId',
                        templateUrl: templateUrls.crmSystemDashboardHome,
                        controller: 'crmSystemDashboardHomeViewController'
                    }
                ];

                for (var index in states) {
                    var state = states[index];

                    stateProvider.state(state.name, state);
                }
            }
        }
    };

    module.exports = definitions;
})();
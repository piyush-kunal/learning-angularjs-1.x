(function () {
    'use strict';

    var argumentValidationUtils = require('../../utilities/argument-validators');
    var viewModelErrorUtils = require('../../utilities/viewmodel-error-utils');

    function CrmSystemHomeViewController(viewModel, customerService) {
        var validation = argumentValidationUtils.validateArguments(arguments);

        if (validation) {
            customerService.getCustomers()
                .then(
                    function (customers) {
                        viewModel.customers = customers;
                    },
                    function (error) {
                        viewModelErrorUtils.handleError(viewModel, error);
                    });
        }
    }

    function CrmSystemDashboardHomeViewController(
        viewModel, stateParameters, promiseService, customerService,
        orderService, orderChartDataTransformationService) {
        var validation = argumentValidationUtils.validateArguments(arguments);

        if (validation) {
            var selectedCustomerId = stateParameters.customerId;

            if (selectedCustomerId) {
                var customerPromise = customerService.getCustomer(selectedCustomerId);
                var ordersPromise = orderService.getOrdersByCustomerId(selectedCustomerId);

                promiseService.all([customerPromise, ordersPromise])
                    .then(
                        function (results) {
                            if (results) {
                                viewModel.customer = results[0];
                                viewModel.orders = results[1];
                                viewModel.ordersChartData =
                                    orderChartDataTransformationService.transform(results[1]);
                            }
                        },
                        function (error) {
                            viewModelErrorUtils.handleError(viewModel, error);
                        });
            }
        }
    }

    var definitions = {
        crmSystemHomeViewController: CrmSystemHomeViewController,
        crmSystemDashboardHomeViewController: CrmSystemDashboardHomeViewController
    };

    module.exports = definitions;
})();
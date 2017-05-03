(function () {
    'use strict';

    var DEFAULT_CHART_TYPE = 'line';
    var validationUtils = require('../../utilities/argument-validators');

    function CustomerService(restService, serviceUrls) {
        var validation = validationUtils.validateArguments(arguments);
        var serviceDefinition = {};

        if (validation) {
            var customerServiceUrl = serviceUrls.baseUrl +
                serviceUrls.customers.baseUrl + serviceUrls.customers.queryAndSave;
            var customerRestService = restService(customerServiceUrl);

            serviceDefinition = {
                getCustomers: function () {
                    return customerRestService.query().$promise;
                },
                getCustomer: function (id) {
                    return customerRestService.get({
                        customerId: id
                    }).$promise;
                },
                saveCustomer: function (customer) {
                    if (customer) {
                        return customerRestService.save(customer).$promise;
                    }
                },
                generateCustomerId: function () {
                    var MIN_ID = 11;
                    var MAX_ID = 21;

                    return Math.floor(
                        Math.random() * (MAX_ID - MIN_ID) + MIN_ID);
                }
            };
        }

        return serviceDefinition;
    }

    function OrderService(restService, serviceUrls) {
        var validation = validationUtils.validateArguments(arguments);
        var serviceDefinition = {};

        if (validation) {
            var orderServiceUrl = serviceUrls.baseUrl +
                serviceUrls.orders.baseUrl + serviceUrls.orders.queryByCustomerId;
            var orderRestService = restService(orderServiceUrl);

            serviceDefinition = {
                getOrdersByCustomerId: function (customerId) {
                    return orderRestService.query({
                        customerId: customerId
                    }).$promise;
                }
            };
        }

        return serviceDefinition;
    }

    function OrderChartDataTransformationService() {
        var serviceDefinition = {
            transform: function (data, chartType) {
                chartType = chartType || DEFAULT_CHART_TYPE;
                var chartData = [];

                if (data) {
                    var orderIds = ['Order #'];
                    var orderAmounts = ['Order Amount'];

                    for (let index in data) {
                        let order = data[index];

                        if (order && order.orderId && order.amount) {
                            orderIds.push(order.orderId);
                            orderAmounts.push(order.amount);
                        }
                    }

                    chartData = [orderIds, orderAmounts];
                }

                return chartData;
            }
        };

        return serviceDefinition;
    }

    var definitions = {
        customerService: CustomerService,
        orderService: OrderService,
        orderChartDataTransformationService: OrderChartDataTransformationService
    };

    module.exports = definitions;
})();
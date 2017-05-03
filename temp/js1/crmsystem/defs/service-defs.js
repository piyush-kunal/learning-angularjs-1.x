(function () {
    'use strict';

    var DEFAULT_CHART_TYPE = 'line';
    var MIN_QUOTE_VALUE = 100;
    var MAX_QUOTE_VALUE = 1000;

    var definitions = {
        customerService: function (restService, serviceUrls) {
            var serviceDefinition = {};

            if (restService && serviceUrls) {
                var customerServiceUrl = serviceUrls.baseUrl +
                    serviceUrls.customers.baseUrl + serviceUrls.customers.queryAndSave;
                var customerRestService = restService(customerServiceUrl);

                serviceDefinition = {
                    getCustomers: function () {
                        return customerRestService.query().$promise;
                    },
                    getCustomer: function (customerId) {
                        return customerRestService.get({
                            id: customerId
                        }).$promise;
                    },
                    saveCustomer: function (customerRecord) {
                        if (customerRecord) {
                            return customerRestService.save(customerRecord).$promise;
                        }
                    },
                    generateNewCustomerId: function () {
                        var MIN_ID = 11;
                        var MAX_ID = 21;
                        var newId = Math.floor(
                            Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

                        return newId;
                    }
                };
            }

            return serviceDefinition;
        },
        orderService: function (restService, serviceUrls) {
            var serviceDefinition = {};

            if (restService && serviceUrls) {
                var orderServiceUrl = serviceUrls.baseUrl +
                    serviceUrls.orders.baseUrl + serviceUrls.orders.queryAndSave;
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
        },
        ordersChartDataTransformerService: function () {
            var serviceDefinition = {
                transform: function (orders, chartType) {
                    chartType = chartType || DEFAULT_CHART_TYPE;

                    var ordersChartData = [];

                    var orderIds = ['Order #'];
                    var orderUnits = ['Units'];
                    var orderAmounts = ['Order Amount'];

                    for (var index in orders) {
                        var order = orders[index];
                        var validation = order && order.orderId &&
                            order.units && order.amount;

                        if (validation) {
                            orderIds.push(order.orderId);
                            orderUnits.push(order.units);
                            orderAmounts.push(order.amount);
                        }
                    }

                    ordersChartData =
                        [orderIds, orderUnits, orderAmounts];

                    return ordersChartData;
                }
            };

            return serviceDefinition;
        },
        stockQuoteService: function () {
            var serviceDefinition = {
                getStockQuote: function (customerId) {
                    var quote = 0;

                    if (customerId) {
                        quote = Math.floor(Math.random() *
                            (MAX_QUOTE_VALUE - MIN_QUOTE_VALUE) + MIN_QUOTE_VALUE);
                    }

                    return quote;
                }
            };

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
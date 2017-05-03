(function () {
    'use strict';

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
                    getCustomerDetail: function (customerId) {
                        return customerRestService.get({
                            id: customerId
                        }).$promise;
                    },
                    saveCustomerDetail: function (customerDetail) {
                        return customerRestService.save(customerDetail).$promise;
                    },
                    generateId: function () {
                        var MIN_ID = 11;
                        var MAX_ID = 21;

                        var generatedId = Math.floor(
                            Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

                        return generatedId;
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
        stockQuoteService: function () {
            var serviceDefinition = {
                getStockQuote: function (companyName) {
                    var quotation = 0;

                    if (companyName) {
                        var MIN_QUOTE = 100;
                        var MAX_QUOTE = 1000;

                        quotation = Math.floor(
                            Math.random() * (MAX_QUOTE - MIN_QUOTE) + MIN_QUOTE);
                    }

                    return quotation;
                }
            };

            return serviceDefinition;
        },
        ordersChartDataTransformer: function () {
            var serviceDefinition = {
                transform: function (orders, chartType) {
                    var ordersChartData = [];

                    chartType = chartType || 'line';

                    if (orders) {
                        var orderIds = ['Order #'];
                        var orderAmounts = ['Order Amount'];

                        for (var index in orders) {
                            var order = orders[index];

                            if (order && order.orderId && order.amount) {
                                orderIds.push(order.orderId);
                                orderAmounts.push(order.amount);
                            }
                        }

                        ordersChartData = [orderIds, orderAmounts];
                    }

                    return ordersChartData;
                }
            };

            return serviceDefinition;
        },
        notificationUrlProvider: function (browser) {
            var serviceDefinition = {};

            if (browser) {
                serviceDefinition = {
                    getNotificationUrl: function () {
                        var url = browser.location.protocol + "//" +
                            browser.location.hostname + ":" +
                            browser.location.port;

                        return url;
                    }
                }
            }

            return serviceDefinition;
        },
        notificationService: function (urlProvider) {
            var NOTIFICATION_EVENT = "newCustomerRecord";
            var serviceDefinition = {};
            var registeredCallbacks = [];

            if (urlProvider) {
                var notificationUrl = urlProvider.getNotificationUrl();
                var io = require('socket.io-client');
                var notificationClient = io.connect(notificationUrl);

                notificationClient.on(NOTIFICATION_EVENT,
                    function (notificationData) {
                        for (var index in registeredCallbacks) {
                            var callback = registeredCallbacks[index];

                            if (callback) {
                                callback(notificationData);
                            }
                        }
                    });

                serviceDefinition = {
                    register: function (callback) {
                        if (callback) {
                            registeredCallbacks.push(callback);
                        }
                    }
                };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();
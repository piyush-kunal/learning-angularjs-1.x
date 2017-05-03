(function () {
    'use strict';

    var handleErrorCallback = function (viewModel, error) {
        if (error) {
            viewModel.errorMessage = 'Error Occurred, Details : ' +
                JSON.stringify(error);

            throw error;
        }
    };

    var definitions = {
        crmSystemHomeViewController: function (viewModel, customerService, notificationService) {
            var validation = viewModel && customerService && notificationService;

            if (validation) {
                notificationService.register(
                    function (notificationData) {
                        if (notificationData && viewModel.customers) {
                            viewModel.$apply(function () {
                                viewModel.customers.push(notificationData);
                            });
                        }
                    });

                customerService.getCustomers().then(
                    function (data) {
                        if (data) {
                            viewModel.customers = data;
                        }
                    },
                    function (error) {
                        handleErrorCallback(viewModel, error);
                    });
            }
        },
        crmSystemDashboardHomeViewController: function (viewModel, qService, stateService,
                                                        stateParameters, customerService,
                                                        orderService, ordersChartDataTransformer,
                                                        crmSystemEvents) {
            var DASHBOARD_VIEW = "crmdashboard";
            var validation = viewModel && qService && stateService && stateParameters &&
                customerService && orderService && ordersChartDataTransformer && crmSystemEvents;

            if (validation) {

                viewModel.$on(crmSystemEvents.DASHBOARD_SWITCH,
                    function (eventInfo, eventData) {
                        if (eventData) {
                            var selectedCustomerId = eventData;

                            stateService.go(DASHBOARD_VIEW, {
                                profileId: selectedCustomerId
                            });
                        }
                    });

                var customerProfileId = stateParameters.profileId;
                var customerPromise = customerService.getCustomerDetail(customerProfileId);
                var ordersPromise = orderService.getOrdersByCustomerId(customerProfileId);

                qService
                    .all([customerPromise, ordersPromise])
                    .then(function (results) {
                            if (results) {
                                viewModel.customer = results[0];
                                viewModel.orders = results[1];
                                viewModel.ordersChartData = ordersChartDataTransformer.transform(results[1]);
                            }
                        },
                        function (error) {
                            handleErrorCallback(viewModel, error);
                        });
            }
        },
        crmSystemStockViewerController: function (viewModel, browser, interval, stockQuoteService) {
            var MAX_GAUGE_UNITS = 6;
            var validation = viewModel && browser && interval && stockQuoteService;
            var timer = null;

            if (validation) {
                viewModel.stockQuoteHistory = [];
                viewModel.gaugeData = {
                    value: 0,
                    lowerLimit: 0,
                    upperLimit: 6,
                    precison: 2,
                    valueUnit: '₹ ',
                    ranges: [
                        {
                            min: 0,
                            max: 1.5,
                            color: '#DEDEDE'
                        },
                        {
                            min: 1.5,
                            max: 2.5,
                            color: '#8DCA2F'
                        },
                        {
                            min: 2.5,
                            max: 3.5,
                            color: '#FDC702'
                        },
                        {
                            min: 3.5,
                            max: 4.5,
                            color: '#FF7700'
                        },
                        {
                            min: 4.5,
                            max: 6.0,
                            color: '#C50200'
                        }
                    ]
                };

                var refreshQuote = function () {
                    var quotation = stockQuoteService.getStockQuote(viewModel.companyName);

                    viewModel.stockQuotation = quotation;
                    viewModel.stockQuoteHistory.unshift({
                        time: new Date(),
                        quote: quotation
                    });

                    if (viewModel.gaugeData) {
                        viewModel.gaugeData.value = quotation % MAX_GAUGE_UNITS;
                    }
                };

                viewModel.$watch('refreshInterval', function (newValue) {
                    if (newValue) {
                        if (timer) {
                            browser.clearInterval(timer.$$intervalId);
                        }

                        timer = interval(refreshQuote, newValue);
                    }
                });
            }
        },
        dashboardSwitchPanelController: function (viewModel, crmSystemEvents) {
            if (viewModel && crmSystemEvents) {
                viewModel.switchDashboard = function () {
                    if (viewModel.selectedCustomerId) {
                        viewModel.$emit(crmSystemEvents.DASHBOARD_SWITCH, viewModel.selectedCustomerId);
                    }
                };
            }
        },
        newCustomerHomeViewController: function (viewModel, timeout, stateService,
                                                 customerService, redirectDetails) {
            var validation = viewModel && timeout &&
                stateService && customerService && redirectDetails;

            if (validation) {
                viewModel.saveStatus = false;

                viewModel.customerRecord = {
                    id: customerService.generateId(),
                    status: true
                };

                viewModel.limits = {
                    min: 1000,
                    max: 10000
                };

                viewModel.phoneNumberExpression = /^\d{5}-\d{5}$/;

                viewModel.saveCustomerRecord = function (customerForm) {
                    if (customerForm && customerForm.$valid) {
                        customerService.saveCustomerDetail(viewModel.customerRecord).then(
                            function (result) {
                                if (result && result.status) {
                                    viewModel.saveStatus = result.status;

                                    timeout(function () {
                                        stateService.go(redirectDetails.redirectTo);
                                    }, redirectDetails.timeoutPeriod);
                                }
                            },
                            function (error) {
                                handleErrorCallback(viewModel, error);
                            });
                    }
                };
            }
        }
    };

    module.exports = definitions;
})();
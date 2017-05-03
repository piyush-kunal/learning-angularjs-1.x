(function () {
    'use strict';

    var UPPER_LIMIT = 6;
    var COLOR_RANGES =
        [
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
        ];
    var PHONE_NUMBER_REG_EX = /^\d{5}-\d{5}$/;
    var MINIMUM_LIMIT = 1000;
    var MAXIMUM_LIMIT = 20000;

    function handleError(viewModel, error) {
        if (viewModel && error) {
            viewModel.errorMessage = "Error Occurred, Details : " +
                JSON.stringify(error);

            throw error;
        }
    }

    var definitions = {
        crmSystemHomeViewController: function (viewModel, customerService,
                                               notificationService, notificationEvents) {
            var validation = viewModel && customerService &&
                notificationService && notificationEvents;

            if (validation) {
                notificationService.registerCallback(notificationEvents.NEW_CUSTOMER_RECORD,
                    function (newCustomerRecordMessage) {
                        if (newCustomerRecordMessage && viewModel.customers) {
                            viewModel.$apply(
                                function () {
                                    viewModel.customers.push(newCustomerRecordMessage);
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
                        handleError(viewModel, error);
                    });

                viewModel.changed = false;

                viewModel.$watch('customers',
                    function (newValue) {
                        viewModel.changed = true;
                    });
            }
        },
        crmSystemDashboardHomeViewController: function (viewModel,
                                                        promiseService, stateParameters, stateService,
                                                        customerService, orderService, crmSystemEvents) {

            var TARGET_VIEW = "crmdashboard";
            var validation = viewModel && promiseService && stateParameters &&
                customerService && orderService && stateService && crmSystemEvents;

            if (validation) {

                viewModel.$on(crmSystemEvents.DASHBOARD_SWITCH_EVENT,
                    function (eventInfo, eventData) {
                        var targetCustomerId = eventData;

                        if (targetCustomerId) {
                            stateService.go(TARGET_VIEW, {
                                customerId: targetCustomerId
                            });
                        }
                    });

                var selectedCustomerId = stateParameters.customerId;
                var customerServicePromise = customerService.getCustomer(selectedCustomerId);
                var orderServicePromise = orderService.getOrdersByCustomerId(selectedCustomerId);

                promiseService.all([customerServicePromise, orderServicePromise])
                    .then(function (results) {
                            if (results) {
                                viewModel.customer = results[0];
                                viewModel.orders = results[1];
                            }
                        },
                        function (error) {
                            handleError(viewModel, error);
                        })
            }
        },
        orderChartViewerController: function (viewModel, chartDataTransformerService) {
            var validation = viewModel && chartDataTransformerService;

            if (validation) {
                viewModel.$watch('ordersChartData',
                    function (newValue) {
                        if (newValue) {
                            viewModel.transformedOrdersChartData =
                                chartDataTransformerService.transform(viewModel.ordersChartData);
                        }
                    });
            }
        },
        stockViewerController: function (viewModel,
                                         timer, browser, stockQuoteService, refreshIntervalConfig) {
            var timerObject = null;
            var validation = viewModel && timer &&
                browser && stockQuoteService;
            var initializeQuotation = function () {
                var quotation = stockQuoteService.getStockQuote(viewModel.customerId);

                viewModel.quotation = quotation;

                if (viewModel.stockQuotesHistory) {
                    viewModel.stockQuotesHistory.unshift({
                        time: new Date(),
                        quotation: quotation
                    });
                }

                if (viewModel.gaugeData) {
                    viewModel.gaugeData.value =
                        Math.floor(quotation % UPPER_LIMIT);
                }
            };

            if (validation) {
                viewModel.stockQuotesHistory = [];

                viewModel.gaugeData = {
                    value: 0,
                    upperLimit: UPPER_LIMIT,
                    lowerLimit: 0,
                    valueUnit: '₹ ',
                    precision: 2,
                    ranges: COLOR_RANGES
                };

                viewModel.refreshInterval = viewModel.refreshInterval || refreshIntervalConfig;

                viewModel.$watch('refreshInterval',
                    function (newValue) {
                        if (timerObject) {
                            browser.clearInterval(timerObject.$$intervalId);
                        }

                        timerObject = timer(initializeQuotation, viewModel.refreshInterval);
                    });
            }
        },
        dashboardSwitchPanelController: function (viewModel, crmSystemEvents) {
            var validation = viewModel && crmSystemEvents;

            if (validation) {
                viewModel.switchDashboard = function () {
                    if (viewModel.targetCustomerId) {
                        viewModel.$emit(crmSystemEvents.DASHBOARD_SWITCH_EVENT, viewModel.targetCustomerId);
                    }
                };
            }
        },
        newCustomerFormController: function (viewModel, customerService, crmSystemEvents) {
            var validation = viewModel &&
                customerService && crmSystemEvents;

            if (validation) {
                viewModel.customerRecord = {
                    id: customerService.generateNewCustomerId(),
                    status: true
                };

                viewModel.phoneNumberExpression = PHONE_NUMBER_REG_EX;
                viewModel.limits = {
                    minimum: MINIMUM_LIMIT,
                    maximum: MAXIMUM_LIMIT
                };

                viewModel.saveCustomerForm = function (customerForm) {
                    if (customerForm && customerForm.$valid) {
                        var saveCustomerPromise =
                            customerService.saveCustomer(viewModel.customerRecord);

                        saveCustomerPromise.then(function (result) {
                                if (result && result.status) {
                                    viewModel.$emit(crmSystemEvents.NEW_CUSTOMER_RECORD, {
                                        addedRecord: viewModel.customerRecord,
                                        status: result.status
                                    });
                                }
                            },
                            function (error) {
                                handleError(viewModel, error);
                            });
                    }
                };
            }
        },
        newCustomerHomeController: function (viewModel,
                                             timer, stateService, browser, crmSystemEvents, redirectDetails) {
            var ONE_SECOND = 1000;
            var validation = viewModel && timer && stateService &&
                browser && crmSystemEvents && redirectDetails;

            if (validation) {
                viewModel.refreshCounter = redirectDetails.timeoutPeriod / ONE_SECOND;
                viewModel.saveStatus = false;

                viewModel.$on(crmSystemEvents.NEW_CUSTOMER_RECORD,
                    function (eventInfo, eventData) {
                        if (eventData && eventData.status) {
                            viewModel.savedCustomerRecord = eventData.addedRecord;
                            viewModel.saveStatus = eventData.status;

                            var timerObject = timer(function () {
                                viewModel.refreshCounter--;

                                if (viewModel.refreshCounter <= 0) {
                                    browser.clearInterval(timerObject.$$intervalId);

                                    stateService.go(redirectDetails.redirectTo);
                                }
                            }, ONE_SECOND);
                        }
                    });
            }
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var definitions = {
        gsHomeViewController: function (viewModel, subHeadingsService) {
            if (viewModel && subHeadingsService) {
                subHeadingsService.getSubHeadings().then(
                    function (data) {
                        if (data) {
                            viewModel.subHeadings = data;
                        }
                    },
                    function (error) {
                        if (error) {
                            viewModel.errorMessage = "Error Occurred, Details : " +
                                JSON.stringify(error);

                            throw error;
                        }
                    }
                )
            }
        },
        loginPanelController: function (viewModel, globalViewModel,
                                        browser, stateService, authenticationService, authKey) {
            var validation = viewModel && globalViewModel && stateService &&
                browser && authenticationService && authKey;

            if (validation) {
                globalViewModel.isAuthenticated = false;
                viewModel.authStatus = false;

                viewModel.login = function () {
                    viewModel.errorMessage = null;

                    authenticationService.authenticate(viewModel.userName, viewModel.password).then(
                        function (result) {
                            if (result && result.token) {
                                browser.localStorage.setItem(authKey, result.token);
                                viewModel.authStatus = true;
                                globalViewModel.isAuthenticated = true;
                            }
                        },
                        function (error) {
                            viewModel.errorMessage = 'Login Failed, Details :' +
                                JSON.stringify(error);

                            throw error;
                        });
                };

                viewModel.logout = function () {
                    var DEFAULT_HOME_VIEW = "home";

                    globalViewModel.isAuthenticated = false;
                    viewModel.authStatus = false;

                    var authToken = browser.localStorage.getItem(authKey);

                    if (authToken) {
                        browser.localStorage.removeItem(authKey);
                    }

                    viewModel.userName = "";
                    viewModel.password = "";

                    stateService.go(DEFAULT_HOME_VIEW);
                };
            }
        },
        navigationPanelController: function (viewModel, globalViewModel) {
            if (viewModel && globalViewModel) {
                globalViewModel.$watch('isAuthenticated',
                    function (newValue) {
                        viewModel.authStatus = newValue;
                    });
            }
        }
    };

    module.exports = definitions;
})();
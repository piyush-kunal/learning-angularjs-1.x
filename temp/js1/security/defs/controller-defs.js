(function () {
    'use strict';

    var definitions = {
        authenticationController: function (viewModel, globalViewModel,
                                            browser, stateService, authenticationService,
                                            authTokenInfo, postLogoutRedirectDetails) {
            var validation = viewModel && browser && stateService &&
                authenticationService && authTokenInfo && postLogoutRedirectDetails;

            if (validation) {
                viewModel.authStatus = false;

                viewModel.login = function () {
                    authenticationService
                        .authenticate(viewModel.userName, viewModel.password)
                        .then(function (result) {
                                if (result && result.token) {
                                    viewModel.authStatus = true;
                                    globalViewModel.isAuthenticated = true;
                                    browser.localStorage.setItem(authTokenInfo.authTokenKey, result.token);
                                }
                            },
                            function (error) {
                                viewModel.errorMessage = 'Login Failed!';

                                throw error;
                            });
                };

                viewModel.logout = function () {
                    viewModel.authStatus = false;
                    globalViewModel.isAuthenticated = false;

                    var authToken = browser.localStorage.getItem(authTokenInfo.authTokenKey);

                    if (authToken) {
                        browser.localStorage.removeItem(authTokenInfo.authTokenKey);
                    }

                    stateService.go(postLogoutRedirectDetails.redirectTo);
                };
            }
        }
    };

    module.exports = definitions;
})();
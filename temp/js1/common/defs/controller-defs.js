(function () {
    'use strict';

    var definitions = {
        homeViewController: function (viewModel, subHeadingsService) {
            var validation = viewModel && subHeadingsService;

            if (validation) {
                subHeadingsService.getSubHeadings().then(
                    function (data) {
                        if (data) {
                            viewModel.subHeadings = data;
                        }
                    },
                    function (error) {
                        if (error) {
                            viewModel.errorMessage = 'Error Occurred, Details : ' +
                                JSON.stringify(error);

                            throw error;
                        }
                    });

            }
        },
        navigationPanelController: function (viewModel, globalViewModel) {
            var validation = viewModel && globalViewModel;

            if (validation) {
                viewModel.authStatus = false;

                globalViewModel.$watch('isAuthenticated',
                    function (newValue) {
                        viewModel.authStatus = globalViewModel.isAuthenticated;
                    });
            }
        }
    };

    module.exports = definitions;
})();
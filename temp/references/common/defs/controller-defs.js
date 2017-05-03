(function () {
    'use strict';

    var definitions = {
        HomeViewController: function (viewModel, subHeadingsService) {
            if (viewModel && subHeadingsService) {

                viewModel.status = true;

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
                    });
            }
        }
    };

    module.exports = definitions;
})();
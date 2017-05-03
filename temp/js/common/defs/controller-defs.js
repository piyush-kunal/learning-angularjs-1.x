(function () {
    'use strict';

    var viewModelErrorUtils = require('../../utilities/viewmodel-error-utils');

    function HomeViewController(viewModel, subHeadingService) {
        var validation = viewModel && subHeadingService;

        if (validation) {
            subHeadingService.getSubHeadings()
                .then(
                    function (result) {
                        if(result) {
                            viewModel.subHeadings = result;
                        }
                    },
                    function (error) {
                        viewModelErrorUtils.handleError(viewModel, error);
                    });
        }
    }

    var definitions = {
        homeViewController: HomeViewController
    };

    module.exports = definitions;
})();
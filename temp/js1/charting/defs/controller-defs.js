(function () {
    'use strict';

    var c3 = require('c3');

    var definitions = {
        chartRendererController: function (viewModel) {
            var validation = c3 && viewModel;

            if (validation) {
                viewModel.$watch('chartData',
                    function (newValue) {
                        if (newValue) {
                            c3.generate({
                                bindto: viewModel.targetDomElement,
                                type: viewModel.chartType,
                                data: {
                                    columns: viewModel.chartData
                                }
                            });
                        }
                    });
            }
        }
    };

    module.exports = definitions;
})();
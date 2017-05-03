(function () {
    'use strict';

    var c3 = require('c3');
    var definitions = {
        chartRendererController: function (viewModel) {
            if (viewModel) {
                viewModel.$watch('chartData',
                    function (newValue) {
                        if (c3 && newValue) {
                            c3.generate({
                                bindto: viewModel.targetDomElement,
                                data: {
                                    type: viewModel.chartType,
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
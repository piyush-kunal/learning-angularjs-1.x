(function () {
    'use strict';

    var c3 = require('c3');

    function ChartRendererController(viewModel) {
        if (viewModel) {
            viewModel.$watch('chartData',
                function (newData) {
                    if (newData && c3) {
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

    var definitions = {
        chartRendererController: ChartRendererController
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        chartingDirective: function () {
            var scope = {
                targetDomElement: '@',
                chartData: '=',
                chartType: '@'
            };

            var controller = 'gsChartRendererController';
            var templateUrl = null;

            return directiveUtils.defineDirective(templateUrl, scope, controller);
        }
    };

    module.exports = definitions;
})();
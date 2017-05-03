(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        chartingDirective: function () {
            var templateUrl = null;
            var scope = {
                chartData: '=',
                chartType: '@',
                targetDomElement: '@'
            };
            var controller = 'chartRendererController';

            return directiveUtils.createDirective(templateUrl, scope, controller);
        }
    };

    module.exports = definitions;
})();
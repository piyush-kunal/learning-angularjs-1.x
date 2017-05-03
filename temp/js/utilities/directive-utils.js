(function () {
    'use strict';

    var definitions = {
        createDirective: function (url, scope, controller) {
            var directiveDefinition = {
                restrict: 'EA'
            };

            if (url) {
                directiveDefinition.templateUrl = function () {
                    return url;
                };
            }

            if (scope) {
                directiveDefinition.scope = scope;
            }

            if (controller) {
                directiveDefinition.controller = controller;
            }

            return directiveDefinition;
        }
    };

    module.exports = definitions;
})();
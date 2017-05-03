(function () {
    'use strict';

    var definitions = {
        createDirective: function (url, scope, controller) {
            var directiveObject = {
                restrict: 'EA'
            };

            if (url) {
                directiveObject.templateUrl = function () {
                    return url;
                }
            }

            if (scope) {
                directiveObject.scope = scope;
            }

            if (controller) {
                directiveObject.controller = controller;
            }

            return directiveObject;
        }
    };

    module.exports = definitions;
})();
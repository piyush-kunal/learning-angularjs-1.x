/**
 * Created by Ramkumar on 4/11/2016.
 */

(function () {

    'use strict';

    var definitions = {
        defineDirective: function (url, scope, controller) {
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
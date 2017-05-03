/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {

    var definitions = {
        defineDirective: function (templateUrl, scope, controller) {
            var directiveDefinition = {
                restrict: 'EA'
            };

            if (templateUrl) {
                directiveDefinition.templateUrl = function () {
                    return templateUrl;
                }
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
(function () {
    'use strict';

    var definitions = {
        validateArguments: function () {
            var validation = true;

            if (arguments) {
                for (var index in arguments) {
                    if (!arguments[index]) {
                        validation = false;
                        
                        break;
                    }
                }
            }

            return validation;
        }
    };

    module.exports = definitions;
})();
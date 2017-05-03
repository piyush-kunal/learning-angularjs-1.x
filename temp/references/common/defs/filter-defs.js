(function () {
    'use strict';

    var definitions = {
        symbolFilter: function (symbols) {
            return function (bindingValue) {
                return bindingValue ? symbols.check : symbols.cross;
            };
        }
    };

    module.exports = definitions;
})();
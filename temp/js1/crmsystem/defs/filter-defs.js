(function () {
    'use strict';

    var definitions = {
        customerImageUrlFilter: function (baseUrl) {
            var filterLogic = function (bindingValue) {
                var imageUrl = null;

                if (bindingValue) {
                    imageUrl = baseUrl + "/Customer" + bindingValue + ".jpg";
                }

                return imageUrl;
            };

            return filterLogic;
        },
        statusSymbolFilter: function (symbols) {
            var filterLogic = function (bindingValue) {
                return bindingValue ? symbols.active : symbols.inactive;
            };

            return filterLogic;
        },
        stockHealthStatusFilter: function() {
            var filterLogic = function(bindingValue, threshold) {
                return bindingValue >= threshold;
            };

            return filterLogic;
        }
    };

    module.exports = definitions;
})();
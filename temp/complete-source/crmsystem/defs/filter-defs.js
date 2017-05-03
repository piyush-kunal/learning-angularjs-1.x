(function () {
    'use strict';

    var definitions = {
        photoUrlFilter: function (photoBaseUrl) {
            var filterLogic = function (bindingValue) {
                if (bindingValue) {
                    var url = photoBaseUrl + "/Customer" + bindingValue + ".jpg";

                    return url;
                }
            };

            return filterLogic;
        },
        stockHealthStatusFilter: function (symbols) {
            var filterLogic = function (bindingValue, threshold) {
                return bindingValue >= threshold ? symbols.check : symbols.cross;
            };

            return filterLogic;
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var DEFAULT_FORMAT = 'jpg';

    var definitions = {
        photoUrlFilter: function (photoBaseUrl) {
            var transformLogic = function (bindingValue, format) {
                var url = '';

                format = format || DEFAULT_FORMAT;

                if (bindingValue) {
                    url = photoBaseUrl + '/Customer' + bindingValue + '.' + format;
                }

                return url;
            };

            return transformLogic;
        },
        symbolFilter: function (symbols) {
            return function (bindingValue) {
                return bindingValue ? symbols.check : symbols.cross;
            };
        },
        thresholdFilter: function () {
            return function (bindingValue, threshold) {
                return bindingValue && bindingValue >= threshold;
            }
        }
    };

    module.exports = definitions;
})();
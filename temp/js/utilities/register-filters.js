(function () {
    'use strict';

    var definitions = {
        registerFilters: function (module, filters) {
            if (module && filters) {
                for (let index in filters) {
                    let filter = filters[index];

                    module.filter(filter.name, filter.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var definitions = {
        registerFactories: function (module, services) {
            if (module && services) {
                for (let index in services) {
                    let service = services[index];

                    module.factory(service.name, service.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();
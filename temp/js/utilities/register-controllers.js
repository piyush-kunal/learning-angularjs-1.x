(function () {
    'use strict';

    var definitions = {
        registerControllers: function (module, controllers) {
            if (module && controllers) {
                for (let index in controllers) {
                    let controller = controllers[index];

                    module.controller(controller.name, controller.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();
(function () {
    'use strict';

    var definitions = {
        registerDirectives: function (module, directiveDefs) {
            var validation = module && directiveDefs;

            if (validation) {
                for(var index in directiveDefs) {
                    var directiveDef = directiveDefs[index];

                    module.directive(directiveDef.name, directiveDef.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();
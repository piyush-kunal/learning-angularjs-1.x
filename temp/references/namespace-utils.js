/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {
    'use strict';

    window.intsol$ = {
        ns: function (moduleName, subModule, moduleType) {
            var companyName = window.companyName || 'intsol';
            var companyType = window.companyType || 'com';
            var namespace = companyType + "." + companyName;

            if (moduleName) {
                namespace += "." + moduleName;
            }

            if (subModule) {
                namespace += "." + subModule;
            }

            if (moduleType) {
                namespace += "." + moduleType
            }

            return namespace;
        }
    };
})();
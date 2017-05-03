/**
 * Created by Ramkumar on 4/10/2016.
 */

(function () {

    var definitions = {
        requireEx: function (moduleFileNames) {
            if (moduleFileNames) {
                for (var index in moduleFileNames) {
                    require(moduleFileNames[index]);
                }
            }
        }
    };

    window.requireEx = definitions.requireEx;
})();
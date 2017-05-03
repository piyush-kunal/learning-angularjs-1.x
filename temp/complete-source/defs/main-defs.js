/**
 * Created by Ramkumar on 4/11/2016.
 */

(function () {

    'use strict';

    var definitions = {
        bootstrapCallback: function () {
            var modulesToInitialize =
                [
                    'com.gs.app'
                ];

            angular.bootstrap(document, modulesToInitialize);
        }
    };

    module.exports = definitions;
})();
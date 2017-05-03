(function () {
    'use strict';

    var HOME_URL = '/home';
    var ABOUT_URL = '/about-us';

    var definitions = {
        initializeCommonRouter: function (stateProvider, urlRouterProvider, templateUrls) {
            var validation = stateProvider && urlRouterProvider && templateUrls;

            if (validation) {
                stateProvider.state('home', {
                    url: HOME_URL,
                    templateUrl: function () {
                        return templateUrls.home;
                    },
                    controller: 'homeViewController'
                });

                stateProvider.state('about', {
                    url: ABOUT_URL,
                    templateUrl: function () {
                        return templateUrls.about;
                    }
                });

                urlRouterProvider.otherwise(HOME_URL);
            }
        }
    };

    module.exports = definitions;
})();
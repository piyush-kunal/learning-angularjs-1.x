(function () {
    'use strict';

    var definitions = {
        initializeCommonRoutes: function (stateProvider, urlRouterProvider, templateUrls) {
            var validation = stateProvider && urlRouterProvider && templateUrls;

            if (validation) {
                stateProvider.state('home', {
                    url: '/home',
                    templateUrl: function () {
                        return templateUrls.home;
                    },
                    controller: 'gsHomeViewController'
                });

                stateProvider.state('about', {
                    url: '/about',
                    templateUrl: function () {
                        return templateUrls.about;
                    }
                });

                urlRouterProvider.otherwise('/home');
            }
        }
    };

    module.exports = definitions;
})();
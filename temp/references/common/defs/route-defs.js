(function () {
    'use strict';

    var definitions = {
        initializeCommonRouter: function (stateProvider, urlRouterProvider, templateUrls) {
            if (stateProvider && urlRouterProvider && templateUrls) {
                stateProvider.state('home', {
                    url: '/home',
                    templateUrl: function () {
                        return templateUrls.home;
                    },
                    controller: 'intsolHomeViewController'
                });

                urlRouterProvider.otherwise('/home');
            }
        }
    };

    module.exports = definitions;
})();
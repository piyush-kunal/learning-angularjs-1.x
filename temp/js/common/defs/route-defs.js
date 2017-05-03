(function () {
    'use strict';

    var definitions = {
        configureRouter: function (stateProvider, urlRouterProvider, templateUrls) {
            var validation = stateProvider &&
                urlRouterProvider && templateUrls;

            if (validation) {
                var states = [{
                        name: 'home',
                        url: '/home',
                        templateUrl: templateUrls.home,
                        controller: 'homeViewController'
                    },
                    {
                        name: 'aboutus',
                        url: '/about-us',
                        templateUrl: templateUrls.aboutus
                    }
                ];

                for (var index in states) {
                    var state = states[index];

                    stateProvider.state(state.name, state);
                }

                urlRouterProvider.otherwise('/home');
            }
        }
    };

    module.exports = definitions;
})();
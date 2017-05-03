(function () {
    'use strict';

    var angular = require('angular');
    var definitions = {
      initializeModule: function(logger, globalViewModel){
        var validation = logger && globalViewModel;

        if(validation){
          globalViewModel.startupTime = new Date();

          logger.info('Application Module Initialized!');
        }
      },
      bootstrapModule: function(moduleName){
        if(moduleName){
          angular.element(document).ready(
            function () {
              angular.bootstrap(document, [moduleName]);
            }
          );
        }
      }
    };

    module.exports = definitions;
})();

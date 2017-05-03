(function () {
    'use strict';

    var definitions = {
      initializeModule: function(loggerService){
        if(loggerService){
          loggerService.info('Common Module Initialize!');
        }
      }
    };

    module.exports = definitions;
})();

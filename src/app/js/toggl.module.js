/**
 * Created by Seokmin on 12/19/14.
 */

(function() {
  'use strict';

  angular
    .module('toggl',toggl);

  toggl.$inject = ['LocalStorageModule', 'ui.router', 'nvd3ChartDirectives'];

})();

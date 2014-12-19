/**
 * Created by Seokmin on 12/19/14.
 */

(function () {
  'use strict';

  angular
    .module('toggl')
    .config(localStorageServiceProvider);

  function localStorageServiceProvider() {
    localStorageServiceProvider
      .setPrefix('toggl')
      .setNotify(true, true);
  }
})();

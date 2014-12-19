/**
 * Created by Seokmin on 12/19/14.
 */

(function () {
  'use strict';

  angular
    .module('toggl')
    .directive('inputList',inputList);

  function inputList() {
    return {
      restrict: 'E',
      templateUrl: 'app/main/tasklist.html'
    };
  }

})();

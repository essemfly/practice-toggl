/**
 * Created by Seokmin on 12/19/14.
 */

(function () {
  'use strict';

  angular
    .module('toggl')
    .filter('displayTime', displayTime);

  function displayTime() {
    return function (input) {
      function checkTime(i) {
        i = (i < 1) ? 0 : i;
        if (i < 10) {
          i = '0' + i;
        }  // add zero in front of numbers < 10
        return i;
      }

      var ms = input;
      var h, m, s = new Date();
      h = checkTime(Math.floor(ms / 3600));
      ms = Math.floor(ms % 3600);
      m = checkTime(Math.floor(ms / 60));
      ms = Math.floor(ms % 60);
      s = checkTime(Math.floor(ms));

      return h + ':' + m + ':' + s;
    };
  }

})();

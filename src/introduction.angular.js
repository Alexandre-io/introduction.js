/**
 * Introduction.js
 * https://github.com/Alexandre-io/introduction.js
 * MIT licensed
 */

(function(root, factory) {
  "use strict";

  if (typeof define === 'function' && define.amd) {
    define(["angular", "introduction.js"], factory);
  }
  else if (typeof exports === 'object') {
    module.exports = factory(require('angular'), require('introduction.js'));
  }
  else {
    root.angularIntroductionJs = factory(root.angular, root.introductionjs);
  }
}(this, function(angular, introductionjs) {
  if (typeof introductionjs === 'object') {
    introductionjs = introductionjs.introductionjs;
  }

  var ngIntroDirective = angular.module('introduction.js', []);


  ngIntroDirective.directive('ngIntroOptions', ['$timeout', function($timeout) {

    return {
      restrict: 'A',
      scope: {
        ngIntroMethod: "=",
        ngIntroExitMethod: "=?",
        ngIntroNextMethod: "=?",
        ngIntroPreviousMethod: "=?",
        ngIntroOptions: '=',
        ngIntroOncomplete: '=',
        ngIntroOnexit: '=',
        ngIntroOnchange: '=',
        ngIntroOnbeforechange: '=',
        ngIntroOnafterchange: '=',
        ngIntroAutostart: '=',
        ngIntroAutorefresh: '='
      },
      link: function(scope) {

        var intro;

        scope.ngIntroMethod = function(step) {


          var navigationWatch = scope.$on('$locationChangeStart', function() {
            intro.exit();
          });

          if (typeof(step) === 'string') {
            intro = introductionjs(step);

          }
          else {
            intro = introductionjs();
          }

          intro.setOptions(scope.ngIntroOptions);

          if (scope.ngIntroAutorefresh) {
            scope.$watch(function() {
              intro.refresh();
            });
          }

          if (scope.ngIntroOncomplete) {
            intro.oncomplete(function() {
              scope.ngIntroOncomplete.call(this, scope);
              $timeout(function() {
                scope.$digest();
              });
              navigationWatch();
            });
          }

          if (scope.ngIntroOnexit) {
            intro.onexit(function() {
              scope.ngIntroOnexit.call(this, scope);
              $timeout(function() {
                scope.$digest();
              });
              navigationWatch();
            });
          }

          if (scope.ngIntroOnchange) {
            intro.onchange(function(targetElement) {
              scope.ngIntroOnchange.call(this, targetElement, scope);
              $timeout(function() {
                scope.$digest();
              });
            });
          }

          if (scope.ngIntroOnbeforechange) {
            intro.onbeforechange(function(targetElement) {
              scope.ngIntroOnbeforechange.call(this, targetElement, scope);
              $timeout(function() {
                scope.$digest();
              });
            });
          }

          if (scope.ngIntroOnafterchange) {
            intro.onafterchange(function(targetElement) {
              scope.ngIntroOnafterchange.call(this, targetElement, scope);
              $timeout(function() {
                scope.$digest();
              });
            });
          }

          if (typeof(step) === 'number') {
            intro.goToStep(step).start();
          }
          else {
            intro.start();
          }
        };

        scope.ngIntroNextMethod = function() {
          intro.nextStep();
        };

        scope.ngIntroPreviousMethod = function() {
          intro.previousStep();
        };

        scope.ngIntroExitMethod = function(callback) {
          intro.exit();
          callback();
        };

        var autoStartWatch = scope.$watch('ngIntroAutostart', function() {
          if (scope.ngIntroAutostart) {
            $timeout(function() {
              scope.ngIntroMethod();
            });
          }
          autoStartWatch();
        });

        scope.$on('$locationChangeSuccess', function() {
          if (typeof intro !== 'undefined') {
            intro.exit();
          }
        });
      }
    };
    }]);

  return ngIntroDirective;

}));
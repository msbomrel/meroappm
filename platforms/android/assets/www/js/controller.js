/**
 * Created by root on 2/26/16.
 */
var app=angular
    .module('myController',[])

    .controller('GlobalController',function ($scope,$location,$localStorage,Class19A,Class19B,Class18A,Class18B,Class17A,Class17B,Class16A,Class16B) {
          var d = new Date();
          var n = d.getDay();

        $scope.nineteenA=function(){
            Class19A.query(function(data) {
            $localStorage.store_nineteenA=data;
            });

          $localStorage.message=$localStorage.store_nineteenA;
          $location.path('/day'+n);
        };
        $scope.nineteenB=function(){
            Class19B.query(function(data) {
            $localStorage.store_nineteenB=data;
            });
          $localStorage.message=$localStorage.store_nineteenB;
          $location.path('/day'+n);
        };
        $scope.eighteenA=function(){
            Class18A.query(function(data) {
             $localStorage.store_eighteenA=data;
            });
          $localStorage.message=$localStorage.store_eighteenA;
          $location.path('/day'+n);
        };
        $scope.eighteenB=function(){
            Class18B.query(function(data) {
            $localStorage.store_eighteenB=data;
            });
          $localStorage.message=$localStorage.store_eighteenB;
          $location.path('/day'+n);
        };
        $scope.seventeenA=function(){
            Class17A.query(function(data) {
            $localStorage.store_seventeenA=data;
            });
          $localStorage.message=$localStorage.store_seventeenA;
          $location.path('/day'+n);
        };
        $scope.seventeenB=function(){
            Class17B.query(function(data) {
            $localStorage.store_seventeenB=data;
            });
          $localStorage.message=$localStorage.store_seventeenB;
          $location.path('/day'+n);
        };
        $scope.sixteenA=function(){
            Class16A.query(function(data) {
            $localStorage.store_sixteenA=data;
            });
          $localStorage.message=$localStorage.store_sixteenA;
          $location.path('/day'+n);
        };
        $scope.sixteenB=function(){
            Class16B.query(function(data) {
            $localStorage.store_sixteenB=data;
            });
          $localStorage.message=$localStorage.store_sixteenB;
          $location.path('/day'+n);
        };

        $scope.update=function(){
          $location.reload();
        };

        $scope.subjects=$localStorage.message;

      $scope.monday=function(){
        $location.path('/day1');
      };
      $scope.tuesday=function(){
        $location.path('/day2');
      };
      $scope.wednesday=function(){
        $location.path('/day3');
      };
      $scope.thursday=function(){
        $location.path('/day4');
      };
      $scope.friday=function(){
        $location.path('/day5');
      };

      $scope.home= function () {
        $location.path('/');
      };
      /*backcallFactory.backcallfun();*/

  })


  .controller('rightCtrl',function($scope, $mdSidenav) {
             $scope.openLeftMenu = function() {
               $mdSidenav('left').toggle();
             };
			 $scope.openRightMenu = function() {
               $mdSidenav('right').toggle();
             };
  })
  /*.controller('GlobalController',function($scope, backcallFactory)
  {
    backcallFactory.backcallfun();
  })*/;



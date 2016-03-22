var app=angular

  .module('routineApp',['ionic','ngStorage','ui.router','myFactory','myController','ngMaterial'])

  .run(function($rootScope, $ionicPlatform, $ionicHistory){
  $ionicPlatform.registerBackButtonAction(function(e){
    if ($rootScope.backButtonPressedOnceToExit) {
      ionic.Platform.exitApp();
    }

    else if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    }
    else {
      $rootScope.backButtonPressedOnceToExit = true;
      window.plugins.toast.showShortCenter(
        "Press back button again to exit",function(a){},function(b){}
      );
      setTimeout(function(){
        $rootScope.backButtonPressedOnceToExit = false;
      },2000);
    }
    e.preventDefault();
    return false;
  },101);

})

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/navbar');

    $stateProvider
      .state('home',{
        url: "/home",
        templateUrl:'templates/config.html'
      })

      .state('navbar',{
        url: "/navbar",
        templateUrl:'templates/sidenavbar.html',
        controller:'GlobalController'
      })

      .state('day0',{
        url:"/day0",
        templateUrl:'templates/monday.html',
        controller:'GlobalController'
      })

      .state('day1',{
        url:"/day1",
        templateUrl:'templates/monday.html',
        controller:'GlobalController'
      })

      .state('day2',{
        url:"/day2",
        templateUrl:'templates/tuesday.html',
        controller:'GlobalController'
      })

      .state('day3',{
        url:"/day3",
        templateUrl:'templates/wednesday.html',
        controller:'GlobalController'
      })

      .state('day4',{
        url:"/day4",
        templateUrl:'templates/thursday.html',
        controller:'GlobalController'
      })

      .state('day5',{
        url:"/day5",
        templateUrl:'templates/friday.html',
        controller:'GlobalController'
      })

      .state('day6',{
        url:"/day6",
        templateUrl:'templates/monday.html',
        controller:'GlobalController'
      })

  })


  .controller('MyController', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
      $mdSidenav('right').toggle();
    }
  })
  .controller;








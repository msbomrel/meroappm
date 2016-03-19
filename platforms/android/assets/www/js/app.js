var app=angular

  .module('routineApp',['ngStorage','ui.router','myFactory','myController','ngMaterial'])

  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/navbar');

    $stateProvider
      .state('home',{
        url: "/home",
        templateUrl:'templates/config.html'
      })

      .state('navbar',{
        url: "/navbar",
        templateUrl:'templates/sidenavbar.html'
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

  /*.controller('GlobalController',function($scope, backcallFactory)
  {
    backcallFactory.backcallfun();
  })

  .factory('backcallFactory', ['$state','$ionicPlatform','$ionicHistory','$timeout',
    function($state,$ionicPlatform,$ionicHistory,$timeout){

   var obj={}
   obj.backcallfun=function(){

   $ionicPlatform.registerBackButtonAction(function () {
   if ($state.current.name == "home") {
   var action= confirm("Do you want to Exit?");
   if(action){
   navigator.app.exitApp();
   }//no else here just if

   }else{
   $ionicHistory.nextViewOptions({
   disableBack: true
   });
   $state.go('home');
   //go to home page
   }
   },100);//registerBackButton
   }//backcallfun
   return obj;
    }])*/









"use strict";

(function(){

angular
  .module("nuschools", ['ui.router'])
  .config(Router);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true)
    $stateProvider
      .state("main", {
        url: "/",
        template: "<h2>Main</h2>"
      })
      .state("test", {
        url: "/test",
        template: "<h2>Test</h2>"
      });
  }

urlRouterProvider.otherwise("/");


})();
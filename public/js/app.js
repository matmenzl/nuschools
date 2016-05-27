"use strict";

(function(){

angular
  .module("nuschools", ['ui.router'])
  .config(Router);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
      .state("main", {
        url: "/main",
        template: "<h2>This is working</h2>"
      });
  }



})();
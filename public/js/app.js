"use strict";

(function(){

angular
  .module("nuschools", ['ui.router'])
  .config(Router)
  .controller("groupsIndexController", groupsIndexCtrl)
  .controller("groupShowController", groupShowCtrl);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true)
    $stateProvider
      .state("groupsIndex", {
        url:          "/",
        templateUrl:  "/html/groups.html",
        controller:   "groupsIndexController",
        controllerAs: "gIndexVM"
      })
      .state("groupShow", {
        url: "/groups/:name",
        templateUrl: "/html/group.html",
        controller: "groupShowController",
        controllerAs: "gShowVM"
      });
      $urlRouterProvider.otherwise("/");
    }

    function groupsIndexCtrl(){
      var vm      = this;
      vm.groups   = [
        {name: "Group1"},
        {name: "Group2"},
        {name: "Group3"}
      ];
    }

    groupShowCtrl.$inject = ['$stateParams']
    function groupShowCtrl($stateParams){
      var vm        = this;
      vm.group      = $stateParams;

    }















})();
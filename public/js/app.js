"use strict";

(function(){

angular
  .module("nuschools", ['ui.router', 'ngResource'])
  .config(Router)
  .factory("Group", groupFactory)
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

    groupFactory.$inject = ['$resource'];
    function groupFactory($resource){
      var Group = $resource("/api/groups");
      return Group;
    }

    groupsIndexCtrl.$inject = ["Group"];
    function groupsIndexCtrl(Group){
      var vm      = this;
      vm.groups   = Group.query();
    }

    groupShowCtrl.$inject = ['$stateParams']
    function groupShowCtrl($stateParams){
      var vm        = this;
      vm.group      = $stateParams;

    }















})();
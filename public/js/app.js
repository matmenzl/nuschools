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
      var Group = $resource("/api/groups/:name", {}, { update: {method: "PATCH"}});
      return Group;
    }

    groupsIndexCtrl.$inject = ["Group"];
    function groupsIndexCtrl(Group){
      var vm      = this;
      vm.groups   = Group.query();
      vm.create   = function(){
        Group.save(vm.newGroup, function(response){
          vm.groups.push(response);
          vm.newGroup = null;
          });
        }
      }

    groupShowCtrl.$inject = ['$stateParams', 'Group', '$state']
    function groupShowCtrl($stateParams, Group, $state){
      var vm        = this;
      vm.group      = Group.get($stateParams, function(response){
      });
      vm.delete     = function(){
        Group.remove($stateParams, function(){
          $state.go("groupsIndex");
        });
      }  
      vm.update     = function(){
        Group.update($stateParams, vm.group, function(response){
          $state.go("groupShow", response);
        })
      }
    }















})();
angular.module('goFootball', ['ui.router', 'ngMaterial'])
  
  .config(function ($stateProvider) {

      $stateProvider

        .state('table', {
          url: '/table',
          controller: 'tableCtrl',
          templateUrl: 'league_table/views/table.html'
        })

    }
  )


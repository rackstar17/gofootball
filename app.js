angular.module('goFootball', ['ui.router'])
  
  .config(function ($stateProvider) {

      $stateProvider

        .state('table', {
          url: '/table',
          controller: 'tableCtrl',
          templateUrl: 'league_table/views/table.html'
        })

    }
  )


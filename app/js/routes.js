'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/states/home/home.html',
            controller: 'HomeCtrl'
        });

}

module.exports = Routes;

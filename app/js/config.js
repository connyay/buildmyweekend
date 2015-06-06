'use strict';



/**
 * @ngInject
 */
function Config($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
    // strict mode requires a trailing slash
    $urlMatcherFactoryProvider.strictMode(false);
    // no hash bang
    $locationProvider.html5Mode(true);
    // Default route
    $urlRouterProvider.otherwise('/');
}

module.exports = Config;

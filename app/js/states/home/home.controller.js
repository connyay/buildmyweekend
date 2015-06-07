'use strict';

var statesModule = require('../');

/**
 * @ngInject
 */
function HomeCtrl(Recommendations, WeekendService) {
    var vm = this;
    vm.weekend = WeekendService.weekend;

    Recommendations.getRecommendations().success(function (recommendations) {
        vm.recommendations = recommendations;
    });

    vm.addRecommendation = WeekendService.addRecommendation;
}

statesModule.controller('HomeCtrl', HomeCtrl);

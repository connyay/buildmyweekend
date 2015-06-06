'use strict';

var statesModule = require('../');

/**
 * @ngInject
 */
function HomeCtrl($scope, Recommendations) {
    Recommendations.getRecommendations().success(function (recommendations) {
        $scope.recommendations = recommendations;
    });
}

statesModule.controller('HomeCtrl', HomeCtrl);

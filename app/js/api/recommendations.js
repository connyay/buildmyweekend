'use strict';

var apiModule = require('./');

/**
 * @ngInject
 */
function Recommendations($http) {
    return {
        getRecommendations: function () {
            return $http.get('http://localhost:9002/recommendations');
        }
    };
}

apiModule.factory('Recommendations', Recommendations);

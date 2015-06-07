'use strict';

var servicesModule = require('./');

/**
 * @ngInject
 */
function WeekendService() {
    var _weekend = {
        items: []
    };
    return {
        weekend: _weekend,
        addRecommendation: function (recommendation) {
            _weekend.items.push(recommendation);
        },
        removeRecommendation: function (recommendation) {
            var len = _weekend.items.length;
            for (var i = 0; i < len; i++) {
                if (_weekend.items[i].id === recommendation.id) {
                    _weekend.items.splice(i, 1);
                    return;
                }
            }
        },
        reset: function () {
            _weekend.item.length = 0;
        }
    };
}

servicesModule.factory('WeekendService', WeekendService);

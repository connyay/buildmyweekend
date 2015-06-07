'use strict';

var componentsModule = require('../');

function weekendFilter() {
    return function (recommendations, weekend) {
        if (!recommendations || !recommendations.length) {
            return recommendations;
        }
        return recommendations.filter(function (r) {
            return (weekend.items.indexOf(r) === -1);
        });
    };
}


componentsModule.filter('weekendFilter', weekendFilter);

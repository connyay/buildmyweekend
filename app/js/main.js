'use strict';


require('angular');

// angular modules
require('angular-ui-router');

// app modules
require('./api');
require('./services');
require('./states');
require('./components');
require('./templates');

var requires = [
    'bmw.api',
    'bmw.services',
    'bmw.components',
    'bmw.states',
    'bmw.templates',
    'ui.router'
];

angular.module('bmw', requires);
angular.module('bmw').config(require('./routes'));
angular.module('bmw').config(require('./config'));

'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('bmw.states', []);

bulk(__dirname, ['./**/!(*.spec).js']);

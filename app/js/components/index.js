'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('bmw.components', []);

bulk(__dirname, ['./**/!(*.spec).js']);

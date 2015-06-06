'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('bmw.api', []);

bulk(__dirname, ['./**/!(*.spec).js']);

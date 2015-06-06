'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('bmw.services', []);

bulk(__dirname, ['./**/!(*.spec).js']);

'use strict';

var istanbul = require('browserify-istanbul');
var debowerify = require('debowerify');

module.exports = function (config) {

    config.set({

        basePath: '../',
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'app/js/**/*.js': ['browserify', 'coverage']
        },
        browsers: ['Chrome'],
        reporters: ['progress', 'coverage'],

        autoWatch: true,

        browserify: {
            debug: true,
            transform: [
                debowerify,
                'bulkify',
                istanbul({
                    ignore: ['**/node_modules/**', '**/test/**']
                })
            ]
        },

        proxies: {
            '/': 'http://localhost:9876/'
        },

        urlRoot: '/__karma__/',

        files: [
            // app-specific code
            'app/js/main.js',
            // 3rd-party resources
            'app/bower_components/angular-mocks/angular-mocks.js',
            // test files
            'test/unit/**/*.js'
        ]

    });

};

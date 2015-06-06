'use strict';

var pkg = require('../package');
module.exports = {
    'pkg': pkg,
    'syncport': 9000,
    'syncproxyport': 3000,

    'styles': {
        'src': 'app/styles/**/*.scss',
        'dest': 'build/css/'
    },

    'scripts': {
        'src': 'app/js/**/*.js',
        'dest': 'build/js'
    },

    'images': {
        'src': 'app/images/**/*',
        'dest': 'build/images'
    },

    'fonts': {
        'src': ['app/fonts/**/*'],
        'dest': 'build/fonts'
    },

    'views': {
        'watch': [
            'app/index.html',
            'app/**/*.jade'
        ],
        'src': 'app/**/*.jade',
        'dest': 'app/js'
    },

    'dist': {
        'root': 'build',
        'release': 'release'
    },

    'browserify': {
        'entries': ['./app/js/main.js'],
        'bundleName': 'main.js',
        'sourcemap': true
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }

};

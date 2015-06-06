'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', function () {

    browserSync({
        port: config.syncport,
        proxy: 'localhost:' + config.syncproxyport
    });

});

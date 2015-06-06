'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');
var compass = require('gulp-compass');

gulp.task('styles', function () {
    return gulp.src(config.styles.src)
        .pipe(compass({
            sass: 'app/styles',
            css: 'app/styles/.css'
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({
            stream: true
        })));
});

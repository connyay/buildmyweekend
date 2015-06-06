'use strict';

var config = require('../config');
var gulp = require('gulp');
var jade = require('gulp-jade');
var templateCache = require('gulp-angular-templatecache');

// Views task
gulp.task('views', function () {

    // Put our index.html in the dist folder
    gulp.src(['app/index.html'])
        .pipe(gulp.dest(config.dist.root));

    // Process any other view files from app/views
    return gulp.src(config.views.src)
        .pipe(jade())
        .pipe(templateCache({
            module: 'bmw.templates',
            moduleSystem: 'Browserify',
            standalone: true
        }))
        .pipe(gulp.dest(config.views.dest));

});

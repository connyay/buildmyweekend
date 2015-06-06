'use strict';

var config = require('../config');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
    var toDelete = [config.dist.root];
    if (global.isProd) {
        toDelete.push(config.dist.release);
    }
    del(toDelete, cb);
});

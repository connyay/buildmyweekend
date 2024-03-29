'use strict';

var config = require('../config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var morgan = require('morgan');
var path = require('path');

gulp.task('server', function () {

    var server = express();

    // log all requests to the console
    server.use(morgan('dev'));
    server.use('/', express.static(config.dist.root));
    var appPath = '/';
    server.use(appPath, express.static(config.dist.root));

    // Serve index.html for all routes to leave routing up to Angular
    server.all(appPath + '*', function (req, res) {
        res.sendFile('index.html', {
            root: 'build'
        });
    });

    // Start webserver if not already running
    var s = http.createServer(server);
    s.on('error', function (err) {
        if (err.code === 'EADDRINUSE') {
            gutil.log('Browserify server is already started at port ' + config.syncproxyport);
        } else {
            throw err;
        }
    });

    s.listen(config.syncproxyport);

});

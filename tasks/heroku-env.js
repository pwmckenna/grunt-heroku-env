'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
    grunt.registerTask('heroku-env', function () {
        if (process.env.ENV_DIR) {
            var filenames = fs.readdirSync(process.env.ENV_DIR);
            filenames.forEach(function (filename) {
                process.env[filename] = fs.readFileSync(path.resolve(process.env.ENV_DIR, filename));
            });
        }
    });
};
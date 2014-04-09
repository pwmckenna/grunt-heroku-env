'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        env: {
            test: {
                ENV_DIR: path.resolve(__dirname, 'test/env')
            }
        }
    });
    grunt.loadNpmTasks('grunt-env');
    grunt.loadTasks('tasks');
    grunt.registerTask('print-env', function () {
        for (var e in process.env) {
            grunt.log.writeln(e, process.env[e]);
        }
    });
    grunt.registerTask('test', ['env:test', 'heroku-env', 'print-env']);
    grunt.registerTask('heroku', ['heroku-env', 'print-env']);
};
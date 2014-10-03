module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            main: {
                options: {
                    autoWatch: false,
                    browsers: [
                        'PhantomJS'
                    ],
                    coverageReporter: {
                        type: 'lcov',
                        dir: 'coverage'
                    },
                    files: [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/underscore/underscore.js',
                        'bower_components/backbone/backbone.js',
                        'backbone.inheritance.js',
                        'test/**/*Spec.js'
                    ],
                    frameworks: [
                        'jasmine'
                    ],
                    logLevel: 'LOG_INFO',
                    preprocessors: {
                        'backbone.inheritance.js': 'coverage'
                    },
                    reporters: [
                        'coverage',
                        'junit',
                        'progress'
                    ],
                    singleRun: true
                }
            }
        },
        uglify: {
            muscles: {
                files: {
                    '<%= pkg.name %>.min.js': '<%= pkg.name %>.js'
                },
                options: {
                    preserveComments: 'some'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'karma:main',
        'uglify'
    ]);
};

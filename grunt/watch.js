'use strict';
module.exports = function (grunt) {
	grunt.config.set('watch', {
         options: {
             dateFormat: function(time) {
                 grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
                 grunt.log.writeln('Waiting for more changes...');
             },
             interval: 1000,
        },
        'watch-scripts': {
            files: [
                'grunt/**', 
                'Gruntfile.js', 
                'src/**/*.tpl.jade',
                'src/**/*.js', 
            ],
            tasks: ['compile-scripts'],
        },
        'watch-styles': {
            files: [
                'src/**/*.scss', 
            ],
            tasks: ['compile-styles'],
        },
        'watch-assets': {
            files: [
                'src/fonts/**/*', 
                'src/images/**/*', 
            ],
            tasks: ['copy:images', 'copy:fonts',],
        }
	});
    grunt.loadNpmTasks('grunt-contrib-watch');
};

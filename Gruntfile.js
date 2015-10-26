module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
        options: {
            livereload: 35729
        },
        gruntfile: {
            files: ['Gruntfile.js'],
            tasks: ['default']
        },
        js: {
            files: ['src/*.js'],
            tasks: ['concat','uglify']
        }
    },
    concat: {
        jquery: {
            src:  [
                'src/jquery-1.11.3.min.js',
                'src/jquery-migrate-1.2.1.min.js'
            ],
            dest: 'dist/jquery.min.js'
        },
        plugin: {
            src:  'src/jquery.charactersCountdown.js',
            dest: 'dist/jquery.charactersCountdown.min.js'
        }
    },
    uglify: {
        my_target: {
            files: {
                'dist/jquery.charactersCountdown.min.js': 'dist/jquery.charactersCountdown.min.js'
            }
        }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat','uglify']);
};
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      test: ['tmp']
    },

    nodeunit: {
      test: ['test/**/*_test.js']
    },

    watch: {
      files: '<%= jshint.all %>',
      tasks: 'default'
    },

    jshint: {
      all: ['Gruntfile.js', 'tasks/**/*.js', '<%= nodeunit.test %>'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        globals: {}
      }
    },

    // Configuration to be run (and then tested).
    component: {
      test_build_dev: {
        output: './tmp/',
        dev: true,
        sourceUrls: true,
        name: 'build-dev'
      },
      test_build_prod: {
        output: './tmp/',
        dev: false,
        sourceUrls: false,
        name: 'build-prod'
      },
      test_standalone: {
        output: './tmp/',
        dev: false,
        styles: false,
        sourceUrls: false,
        standalone: '$',
        name: 'standalone'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'component', 'nodeunit']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);

};
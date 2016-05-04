module.exports = function (grunt) {
  var webpackConfig = require('./webpack.config.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // mocha_casperjs: {
    //   files: {
    //     src: ['test_client/**/*.js']
    //   }
    // },

    mochaTest: {
      options: {
        timeout: 4000,
      },
      test: {
        src: ['test_server/**/*.js'],
      },
    },

    watch: {
      scripts: {
        files: ['client/**/*.js', '!client/bundle.js'],
        tasks: ['webpack'],
      },
    },

    webpack: {
      options: webpackConfig,
      thesis: {
        entry: './client/index.js',
        output: {
          path: __dirname + '/client',
          filename: 'bundle.js',
        },
        stats: 'errors-only',
        watch: false,
        progress: true,

      },
    },

    nodemon: {
      dev: {
        script: 'server/server.js',
        watch: ['server'],
      },
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack-without-server');
  grunt.loadNpmTasks('grunt-nodemon');
  // grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', '', function () {
  var taskList = ['mochaTest'];
    grunt.task.run(taskList);
  });

  grunt.registerTask('startserver', '', function () {
    var taskList = ['webpack', 'concurrent', 'nodemon', 'watch'];
    grunt.task.run(taskList);
  });
};

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      browserify: {
        files: ['src/scripts/**/*.js'],
        tasks: ['browserify']
      }
    },

    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]]
        },        
        src: ['src/scripts/app1.js'],
        dest: 'public/scripts/app.js',
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);

};
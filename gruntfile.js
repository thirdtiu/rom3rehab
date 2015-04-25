module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      production: {
        files: {
          'js/scripts.min.js' : ['src/javascripts/lib/jquery-1.11.2.js', 'src/bootstrap-sass-3.3.4/assets/javascripts/bootstrap.js', 'src/javascripts/custom/*.js']
        }
      },
      development: {
        options: {
          beautify: true, 
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        files: {
          'js/scripts.min.js' : ['src/javascripts/lib/jquery-1.11.2.js', 'src/bootstrap-sass-3.3.4/assets/javascripts/bootstrap.js', 'src/javascripts/custom/*.js']
        }
      }
    },

    sass:{
      development: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/styles.css' : 'src/stylesheets/application.scss'
        }
      },
      production: {
        options:{
          outputStyle: 'compressed'
        },
        files:{
          'css/styles.css' : 'src/stylesheets/application.scss' 
        }
      }
    },

    watch: {
      js: {
        files: ['src/javascripts/*/*.js'],
        tasks: ['uglify:development']
      },
      css:{
        files: ['src/stylesheets/*.scss', 'src/bootstrap-sass-3.3.4/assets/stylesheets/**/*.scss'],
        tasks: ['sass:development']
      }
    }


    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify:development', 'sass:development']);
  grunt.registerTask('production', ['uglify:production', 'sass:production']);

};
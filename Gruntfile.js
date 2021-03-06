'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: '<%= yeoman.dist %>'
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/img']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    concat: {},
    uglify: {},
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            'img/**/*',
            'fonts/**/*',
            '!**/_*{,/**}',
          ],
          dest: '<%= yeoman.dist %>'
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/_bower_components/fontawesome/fonts',
          src: ['**/*'],
          dest: '<%= yeoman.dist %>/fonts'
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/_bower_components/open-sans/fonts',
          src: ['**/*'],
          dest: '<%= yeoman.dist %>/fonts'
        }]
      },
      printcss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.tmp/css',
          src: 'print.css',
          dest: '<%= yeoman.dist %>/css/'
        }]
      },
      covercss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.tmp/css',
          src: 'cover.css',
          dest: '<%= yeoman.dist %>/css/'
        }]
      },
      favicon: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: 'favicon.ico',
          dest: '<%= yeoman.dist %>/'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:jbonigomesbbk/jbonigomesbbk.github.io.git',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    // scsslint: {
    //   allFiles: [
    //     '<%= yeoman.app %>/_scss/**/*.scss'
    //   ]
    // },
    concurrent: {
      server: [
        'compass:server',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        'copy:dist'
      ]
    },
    wkhtmltopdf: {
      dev: {
        src: '.jekyll/pdf/*.html',
        dest: '.jekyll/pdf/',
        args: [
          '-L', '20', '-T', '25', '-B', '25', '-R', '20',
          '--dpi', '96',
          '--print-media-type',
          '--footer-center', '[page]',
          'cover', 'http://iou.rocks/cover/',
          'toc',
          '--xsl-style-sheet',
          '<%= yeoman.app %>/_includes/toc.xsl'
        ]
      },
      prod: {
        src: '<%= yeoman.dist %>/pdf/*.html',
        dest: '<%= yeoman.dist %>/pdf/',
        args: [
          '-L', '20', '-T', '25', '-B', '25', '-R', '20',
          '--dpi', '96',
          '--print-media-type',
          '--footer-center', '[page]',
          'cover', 'http://iou.rocks/cover/',
          'toc',
          '--xsl-style-sheet',
          '<%= yeoman.app %>/_includes/toc.xsl'
        ]
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'browserSync:server',
      'wkhtmltopdf:dev',
      'watch'
    ]);
  });

  grunt.registerTask('test', []);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    // 'jshint:all',
    'csslint:check',
    // 'scsslint'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    // 'imagemin',
    // 'svgmin',
    'filerev',
    'usemin',
    'htmlmin',
    'copy:printcss',
    'copy:covercss',
    'copy:favicon',
    'wkhtmltopdf:prod'
  ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};

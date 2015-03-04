---
layout:     post
categories: chapter
---

/* mkdir laugh && cd $_ */

- About this documentation:
- About the tech used in the project
- Competitors
- Problems encountered
  - NoSQL related
  - General angular + firebase

## The change for grunt wkhtmltopdf

    module.exports = function(grunt) {

      var helper = require('./lib/wkhtmltopdf-lib').init(grunt);

      grunt.registerMultiTask('wkhtmltopdf', 'Build PDF', function() {

        grunt.file.mkdir('dist/pdf');

        helper.convert({
          code: 90,
          args: [
            '--dpi', '96',
            '--print-media-type',
            '--footer-center', '[page]',
            'cover', 'app/_includes/cover.html',
            'toc',
            '--xsl-style-sheet',
            'app/_includes/toc.xsl',
            'dist/docs/index.html',
            'dist/pdf/jgomes01.pdf'
          ],
          done: function(err) {
            if (err) {
              grunt.log('>>>', err);
            }
          }
        });

      });
    };
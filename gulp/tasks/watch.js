/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp'),
    config   = require('../config');

gulp.task('watch', ['watchify'], function() {
  gulp.watch(config.less.src,   ['less']);
  gulp.watch(config.jade.src, ['jade']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
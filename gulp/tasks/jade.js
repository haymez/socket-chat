var gulp   = require('gulp'),
    jade   = require('gulp-jade'),
    config = require('../config').jade;

// Get and render all .jade files
gulp.task('jade', function () {
  gulp.src(config.src)
    .pipe(jade())
    .pipe(gulp.dest(config.dest));
});

var gulp   = require('gulp'),
    less   = require('gulp-less'),
    concat = require('gulp-concat'),
    config = require('../config').less,
    prefix = require('gulp-autoprefixer');

// Get and render all .less files
gulp.task('less', function () {
  gulp.src(config.src)
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(config.dest));
});

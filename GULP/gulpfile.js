var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');



  gulp.task('scripts', function() {
    return gulp.src('js/src/*.js')
      .pipe(concat('script.min.js'))
      .pipe(gulp.dest('js/dist/'));
  });

  gulp.task('minify', function () {
    gulp.src('js/dist/script.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/dist/'));
  });


  gulp.task('css', function() {
    return gulp.src('css/src/*.css')
      .pipe(concatCss("style.min.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('css/dist/'));
  })




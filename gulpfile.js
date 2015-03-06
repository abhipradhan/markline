'use strict';

var gulp = require("gulp"),
  cssmin = require("gulp-cssmin"),
  uglify = require("gulp-uglifyjs"),
  smoosher = require("gulp-smoosher"),
  inline = require("gulp-inline-source");

gulp.task('styles', function () {
  return gulp.src('./src/markline.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/markline.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('dist', ['styles', 'scripts'], function () {
  return gulp.src('./src/markline.html')
    .pipe(smoosher({base: './dist'}))
    .pipe(gulp.dest('./dist'));
});

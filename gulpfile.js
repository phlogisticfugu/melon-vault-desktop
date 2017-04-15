var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var del = require('del');

var dist_dir = 'dist/';
var app_dir = 'src/app/';
var styles_dir = 'src/styles/';

gulp
.task('clean', function(cb) {
  del([
    dist_dir
  ], cb);
})
.task('less', function() {
  return gulp.src(styles_dir + 'main.less')
  .pipe(less({
    paths: [
      styles_dir,
      'node_modules/bootstrap/less/'
    ]
  }))
  // .pipe(autoprefixer({
  //   browsers: ['last 1 Chrome versions']
  // }))
  .pipe(gulp.dest(dist_dir))
  ;
})
.task('default', function(cb) {
  runSequence(
    'clean',
    ['less'],
    cb
  );
})

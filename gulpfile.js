var gulp = require('gulp');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var jsmin = require('gulp-jsmin');
var exec = require('child_process').exec;
 
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      fallback: '/index.html',
      port: 8080,
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('deploy', function(callback) {
  runSequence('build',
              'cf-push',
              callback);
});

gulp.task('build', function(callback) {
  runSequence('imgmin',
              'htmlmin',
              'cssmin',
              'jsmin',
              'jslib',
              callback);
});

gulp.task('imgmin', () =>
    gulp.src('imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
);

gulp.task('htmlmin', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('cssmin', function() {
  return gulp.src('styles/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('jsmin', function () {
    gulp.src('js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('jslib', function () {
    gulp.src('js/lib/**/*.js')
        .pipe(gulp.dest('dist/js/lib/'));
});

gulp.task('cf-push', function(cb) {
  exec('cf push ConsentuaWebSite', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
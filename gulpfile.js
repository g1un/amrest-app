var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var inline = require('gulp-inline');
var svgmin = require('gulp-svgmin');
var img64 = require('gulp-img64');
var svgstore = require('gulp-svgstore');

gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(postcss([
    autoprefixer({
      browsers: ['> 0%']
    })
  ]))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('jade', function(){
  return gulp.src('*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('inline', function(){
  return gulp.src('app/*.html')
    .pipe(inline({
      base: 'img/svg',
      disabledTypes: ['js', 'css'],
      ignore: ['css', 'js', 'fonts']
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('imgtobase', function () {
  gulp.src('app/*.html')
    .pipe(img64())
    .pipe(gulp.dest('app'));
});

gulp.task('svgmin', function () {
  return gulp.src('app/img/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest('app/img/svg'));
});

gulp.task('watch', ['browserSync', 'sass', 'svgmin', 'jade', 'inline'], function(){
  gulp.watch('**/*.scss', ['sass']);
  gulp.watch('**/*.jade', ['jade']);
  gulp.watch('app/*.html', ['inline', browserSync.reload]);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/img/**/*.svg', ['svgmin', 'jade', browserSync.reload]);
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      index: "index.html"
    }
  })
});
'use strict';

const gulp       = require('gulp'),
      babelify   = require('babelify'),
      browserify = require('browserify'),
      buffer     = require('vinyl-buffer'),
      connect    = require('gulp-connect'),
      source     = require('vinyl-source-stream'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify     = require('gulp-uglify'),
      util       = require('gulp-util');

const jsSrc = [ './src/**/*.js' ];
const stylesSrc = [ './src/**/*.+(css|scss)' ];
const imgSrc = [ './src/img/**/*.*' ];
const entryPointSrc = './src/index.js';
const pbl = './dist';
const port = 3000;
const indexSrc = './src/index.html';

gulp.task('connect', () => {
  connect.server({
    root: pbl,
    port: port,
    livereload: true
  });
});

gulp.task('js', () => {
  return browserify({ entries: entryPointSrc, debug: true })
    .transform(babelify, { presets: ['es2015'], sourceMaps: true })
    .on('error', util.log)
    .bundle()
    .on('error', util.log)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(pbl))
    .pipe(connect.reload());
});

gulp.task('index', () => { 
  return gulp.src(indexSrc)
    .pipe(gulp.dest(pbl))
    .pipe(connect.reload()); 
});

gulp.task('styles', () => {
  return gulp.src(stylesSrc)
    .pipe(gulp.dest(pbl))
    .pipe(connect.reload())
});

gulp.task('img', () => {
  return gulp.src(imgSrc)
    .pipe(gulp.dest(pbl))
    .pipe(connect.reload())
});

gulp.task('watch', () => {
  gulp.watch(jsSrc, [ 'js' ]);
  gulp.watch(indexSrc, [ 'index' ]);
  gulp.watch(stylesSrc, [ 'styles' ]);
  gulp.watch(imgSrc, [ 'img' ]);
});

gulp.task('build', [ 'js', 'index', 'styles', 'img' ]);
gulp.task('default', [ 'connect', 'build', 'watch' ]);
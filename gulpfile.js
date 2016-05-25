'use strict';

let gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del'),
    tsc = require('gulp-typescript'),
    concat = require('gulp-concat'),
    paths = {
      vendor: [
        'node_modules/phaser/dist/phaser.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/systemjs/dist/system.js'
      ],
      tsConfig: 'src/ts/tsconfig.json',
      ts: 'src/**/*.ts',
      html: 'src/**/*.html'
    };

gulp.task('clean', () => del('dist/'));

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('vendor', () => {
  return gulp.src(paths.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('tsc', () => {
  let tsProject = tsc.createProject(paths.tsConfig);
  let tsResult = tsProject.src().pipe(tsc(tsProject));
  return tsResult.js
    .pipe(gulp.dest('dist/game/'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  let watchTs = gulp.watch(paths.ts, ['tsc']),
    watchHtml   = gulp.watch(paths.html, ['html']),
    onChanged = (event) => console.info(event.path + ' was ' + event.type + '. Running tasks...');

  watchTs.on('change', onChanged);
  watchHtml.on('change', onChanged);
});

gulp.task('default', [ 'connect', 'vendor', 'watch' ]);

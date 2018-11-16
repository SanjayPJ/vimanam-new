
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('compile-scss', function () {
    gulp.watch('assets/scss/*.scss', function () {
        console.log("compiling scss...");
        return gulp.src('assets/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('assets/css'));
    });
});

gulp.task('compile-bootstrap', function () {
    gulp.watch('node_modules/bootstrap/scss/bootstrap.scss', function () {
        console.log("compiling scss...");
        return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('assets/css'));
    });
});

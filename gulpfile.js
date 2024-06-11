'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return gulp.src('./isobar-eservice-theme-child/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./isobar-eservice-theme-child/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./isobar-eservice-theme-child/scss/**/*.scss', ['sass']);
};
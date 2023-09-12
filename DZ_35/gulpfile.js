const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoprefixe = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');
const jsMinify = require('gulp-terser');
const browserSync = require('browser-sync');

function styles() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(autoprefixe('last 4 version'))
        .pipe(cssMinify())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('./src/js/*.js')
        .pipe(jsMinify())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());

}

function watchTask() {
    browserSync.init(
        { server: './' });
    gulp.watch(['./src/scss/*.scss', './src/js/*.js', './*.html'], gulp.series(styles, scripts));
}

exports.default = gulp.series(scripts,styles,watchTask);
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const { src, dest } = require('gulp');

gulp.task('sass', function () {
    return src('scss/demo1.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('css', { sourcemaps: '.' }));
});
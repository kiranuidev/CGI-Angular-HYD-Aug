var jshint = require('gulp-jshint');
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('checkErrors', function () {
    return gulp.src('./app/*/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('scripts', function () {
    return gulp.src(['./app/*/*.js', "./app/app.js"])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

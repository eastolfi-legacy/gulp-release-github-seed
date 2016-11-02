var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var browserify = require("browserify");
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('clean:lib', function () {
    return del([
        'lib/**/*.js'
    ]);
});

gulp.task('build:app', ['clean:lib'], function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('lib'));
});

gulp.task('bundle:app', ['build:app'], function() {
    return browserify({
        entries: ['./index.js'],
        debug: true
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('./jsw-logger.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('compress:app', function() {
    return gulp.src('dist/jsw-logger.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('dist'));
});
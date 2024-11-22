    const gulp = require('gulp');
    const sass = require('gulp-sass')(require('sass'))
    const sourcemaps = require('gulp-sourcemaps')
    const uglify = require('gulp-uglify')
    const imagemin = require('gulp-imagemin')

    function compressjava(){
        return gulp.src('./source/scipts/*.js')
        .pipe (uglify())
        .pipe (gulp.dest('./build/scripts')) 
    }

    function compressImage(){
        return gulp.src('./source/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./build/images'))
    }

    function compilarSass(){
        return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle:'compressed'
            }))
            .pipe(sourcemaps.write('./ma'))
            .pipe(gulp.dest('./build/styles'))
    }


    exports.default = function(){
        gulp.watch('./source/styles/*.scss',{ignoreInitial: false }, gulp.series(compilarSass));
        gulp.watch('./source/images/*',{ignoreInitial: false }, gulp.series(compressImage));
        gulp.watch('./source/scipts/*.js',{ignoreInitial: false }, gulp.series(compressjava));

    }
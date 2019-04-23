//------------------------------------------------------------------------------
// Dependencies
//------------------------------------------------------------------------------
const gulp = require('gulp');

const sass = require('gulp-sass'), 
      htmlmin = require('gulp-htmlmin'),
      sassLint = require('gulp-sass-lint'), 
      imagemin = require('gulp-imagemin'), 
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');

//------------------------------------------------------------------------------
// Compilation
//------------------------------------------------------------------------------

// Minify HTML
gulp.task('compile-html', function(){
    return gulp
        .src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest('docs'));
})

// Lint and Compile SASS
gulp.task('compile-sass', function(){
    return gulp
        .src('src/scss/*.scss')
        //.pipe(sassLint())
        //.pipe(sassLint.format())
        //.pipe(sassLint.failOnError())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('docs/css'));
})

// Compile Images
gulp.task('compile-img', function(){
    return gulp
        .src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('docs/assets/images'));
})

// Compile JS
gulp.task('compile-js', function(){
    return gulp
        .src('src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('docs/js'));
})

// Compile all
gulp.task('compile', gulp.parallel('compile-html', 
                                   'compile-sass', 
                                   'compile-img',
                                   'compile-js'))

//------------------------------------------------------------------------------
// Watching
//------------------------------------------------------------------------------

// Group watchers together
const watchGroup = function(){
    gulp.watch('src/**/*.html', gulp.series('compile-html'));
    gulp.watch('src/scss/**/*.scss', gulp.series('compile-sass'));
    gulp.watch('src/assets/images/*', gulp.series('compile-img'));
    gulp.watch('src/js/**/*.js', gulp.series('compile-js'));
}

// Run compiler
gulp.task('watch', gulp.series('compile', watchGroup));

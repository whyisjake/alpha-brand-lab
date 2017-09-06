var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence');



gulp.task('sass', function(){
  return gulp.src('public/css/main.scss')
    .pipe(sass()
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('www/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    //server: {
    //  baseDir: 'public'
    //},
    server: ["public", "www"],
  })
})

gulp.task('useref', function(){
  return gulp.src('public/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('www'))
});

gulp.task('images', function(){
  return gulp.src('public/img/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('www/img'))
});

// Copies the index.html page into 'www' folder during build task
gulp.task('indexpage', function() {
  return gulp.src('public/index.html')
  .pipe(gulp.dest('www'))
});

gulp.task('clean:www', function() {
  return del.sync('www');
});



gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch( ['public/css/*.scss'], [ 'sass'] );
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('public/*.html', browserSync.reload); 
    //gulp.watch( ['./public/js/_app.js'], [ 'eslint', 'js' ] );
});


gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})


// Build Files
gulp.task('build', function (callback) {
    runSequence('clean:www', 
    ['sass', 'useref', 'images', 'indexpage'],
    callback
  )
})


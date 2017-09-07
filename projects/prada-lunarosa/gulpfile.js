var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
  return gulp.src('public/sass/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
  })
})


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('public/sass/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('public/*.html', browserSync.reload); 
  gulp.watch('public/js/**/*.js', browserSync.reload); 
})



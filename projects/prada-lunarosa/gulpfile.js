var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


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
    server: {
      baseDir: 'www'
    },
  })
})

//gulp.task('default', ['sass']);




// Watch Files For Changes
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch( ['public/css/*.scss'], [ 'sass'] );
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('www/*.html', browserSync.reload); 
    //gulp.watch( ['./public/js/_app.js'], [ 'eslint', 'js' ] );
});






/*var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    size       = require('gulp-size'),
    rename     = require('gulp-rename'),
    stylus     = require('gulp-stylus'),
    shell      = require('gulp-shell'),
    watch      = require('gulp-watch'),
    babel      = require('babelify'),
    biffy      = require('browserify'),
    nib        = require('nib'),
    buffer     = require('vinyl-buffer'),
    source     = require('vinyl-source-stream');

gulp.task('default', ['stylus', 'stylint', 'js', 'eslint']);

// Stylus
gulp.task('stylus', function () {
  return gulp.src('./public/css/_main.styl')
    .pipe(stylus({
        compress: true,
        use: nib()
    }))
    .pipe( size({
            title: 'Size of CSS:'
    }) )
    .pipe( rename({
        basename: 'style',
        extname: ".css"
    }))
    .pipe(gulp.dest('./public/css'));
});

// Stylint
gulp.task('stylint', shell.task([
    'stylint ./public/css/*.styl -c .stylintrc'
]));

// JS
gulp.task( 'js', function () {
    var b = biffy({
        debug: false
    });

    b.transform( babel );

    b.add( './public/js/_app.js' );

    return b.bundle()
        .on( "error", function (err) { console.log("Error: " + err.message); } )
        .pipe( source('_app.js') )
        .pipe( buffer() )
        .pipe( uglify() )
        .pipe( size({
            title: 'Size of Javascript:'
        }) )
        .pipe( rename({
            basename: 'app.min',
            extname: ".js"
        }))
        .pipe( gulp.dest('./public/js/dist/') );
});

// ESLint
gulp.task( 'eslint', shell.task([
    'eslint ./public/js/_app.js'
], { ignoreErrors: true }));

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch( ['./public/css/*.styl'], [ 'stylus', 'stylint' ] );
    gulp.watch( ['./public/js/_app.js'], [ 'eslint', 'js' ] );
});


*/

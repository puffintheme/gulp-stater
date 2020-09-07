var gulp = require('gulp');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Start browserSync server
gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: 'dist'
      }
    })
  })
  
  gulp.task('sass', function() {
    return gulp.src('scss/style.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(cleanCSS()) // Execute the task to minify the files with gulp-clean-css
      .pipe(rename('style.min.css')) // Rename Sass file to minify CSS with gulp-rename
      .pipe(gulp.dest('dist/assets/css/')) // Outputs it in the css folder
      .pipe(browserSync.reload({ // Reloading with Browser Sync
        stream: true
      }));
  })  

  //Watchers
  gulp.task('watch', function() {
    gulp.watch('scss/style.scss', gulp.series(['sass']));
    gulp.watch('dist/*.html', browserSync.reload);
    gulp.watch('dist/vendor/**/*.js', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
  })
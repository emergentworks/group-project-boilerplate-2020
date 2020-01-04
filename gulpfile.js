const gulp = require('gulp');
const browserSync = require('browser-sync').create();

browserSync.init({ server: '.' });

gulp.task('watch-html', function() {
  return gulp.watch('*.html', (done) => {
      browserSync.reload();
      done();
    })
});

gulp.task('server', gulp.series([
  'watch-html',
]));

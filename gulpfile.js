const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('start-server', () => {
  browserSync({ server: '.' });
  browserSync.reload('*.html');
});

gulp.task('watch-html', () => {
  return gulp
    .src('*.html')
    .pipe(browserSync.reload('*.html'));
});

gulp.task('server', gulp.series([
  'start-server',
  'watch-html',
]));

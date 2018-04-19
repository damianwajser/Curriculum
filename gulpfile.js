const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
gulp.task('image', function(){
	gulp.src('images/*/*').pipe(imagemin())
	.pipe(gulp.dest('images'));
});
gulp.task('default', [ 'image' ]);

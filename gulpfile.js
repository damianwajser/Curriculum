const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
gulp.task('image', function(){
	gulp.src('images/**/*').pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(gulp.dest('images'));
});
gulp.task('default', [ 'image' ]);
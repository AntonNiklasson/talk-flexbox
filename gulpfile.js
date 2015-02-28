var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	return gulp.src('.')
		.pipe(webserver({
			livereload: true,
			directoryListing: false,
			open: false,
            host: "0.0.0.0",
			port: 8888
		}));
});

gulp.task('default', ['webserver'], function() {
	gulp.watch(['css/stylus/**/*.styl'], ['css']);
});

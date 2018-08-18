// Setting my variables
var gulp = require('gulp');
var sass = require('gulp-sass');

//Sass Processing Task
gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
});

//Gulp Watcher Task
gulp.task('default', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
})
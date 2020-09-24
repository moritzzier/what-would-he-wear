const gulp = require('gulp');
const ts = require('gulp-typescript');
// const gulpClean = require('gulp-clean');

/*
 *  global path configuration
 */
const PATHS = {
	SRC: './src/**/*',
	PUBLIC: './public/**/*',
	DIST: './dist/',
};

const tsProject = ts.createProject('./tsconfig.json');

function build(cb) {
	gulp.src(PATHS.SRC).pipe(tsProject()).pipe(gulp.dest(PATHS.DIST));
    gulp.src(PATHS.PUBLIC).pipe(gulp.dest(PATHS.DIST + '/public/'))
	cb();
}

function watch(cb) {
    gulp.watch([PATHS.SRC, PATHS.PUBLIC], gulp.series(build))
}

exports.watch = watch
exports.default = gulp.series(build);

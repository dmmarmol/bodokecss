/**
 * gulpfile.js
 * http://localhost:8000/bodokecss
 * livreload script: //localhost:35729/livereload.js?snipver=1
 */

// REQUIRES
var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var livereload		= require('gulp-livereload');
var autoprefixer 	= require('gulp-autoprefixer');
var gutil 			= require('gulp-util'); // https://www.npmjs.com/package/gulp-util/
var debug 			= require('gulp-debug'); // https://www.npmjs.com/package/gulp-debug/

var BODOKE 			= './scss';
var SRC 			= './src/';

// ROUTES
var DIR = {
	SASS: 			[ './scss/**/*.scss' ],
	BODOKEAPP: 		[ BODOKE+'/bodoke.scss' ],
	BODOKEEXAMPLE: 	[ BODOKE+'/bodoke-example.scss' ],
	CSS: 			{
		FOLDER: 	SRC+'css',
		FILES: 		SRC+'css/**/*.css'
	},
	SCRIPTS: {
		FOLDER: 	SRC+'js',	
		FILES: 		[SRC+'js/**/*.js', '!'+SRC+'js/**/config.js'],
	},
	HTML: 			[SRC+'**/*.html'],
	PHP: 			[SRC+'**/*.php']
}

var AUTOPREFIXER_BROWSERS = [
	'ie >= 8',
	'ie_mob >= 8',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

// gutil.log( DIR.php );

// TASK
gulp.task('default', ['bdk-scss', 'watch'], function() {
	
});

// WATCH SCSS TASK
gulp.task('watch', function () {
	livereload.listen();
    gulp.watch( [DIR.HTML, DIR.PHP], ['reload']).on('change', function(file){
    	gulp.src(file.path)
    		.pipe(debug({title: 'Updated:'}));
    });	
    gulp.watch( [DIR.SASS], ['bdk-scss']).on('change', function(file){
    	gulp.src(file.path)
    		.pipe(debug({title: 'Updated:'}));
    });	
});

// Comple app.scss
gulp.task('bdk-scss', function () {
	gulp.src( DIR.BODOKEAPP )
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
		.pipe(gulp.dest( DIR.CSS.FOLDER ))
		.pipe(livereload());
});

// Comple bodoke.scss
gulp.task('bdkexample-scss', function () {
	gulp.src( DIR.BODOKEEXAMPLE )
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
		.pipe(gulp.dest( DIR.CSS.FOLDER ))
		.pipe(livereload());
});

gulp.task('reload', function() {
	livereload.reload();
});
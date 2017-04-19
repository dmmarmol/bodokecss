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
var del 			= require('del');

var BODOKE 			= './src';
var SRC 			= './dist/';

// ROUTES
var DIR = {
	SASS: 			[ BODOKE+'/**/*.scss' ],
	BODOKEAPP: 		[ BODOKE+'/bodoke.scss' ],
	CSS: 			{
		FOLDER: 	SRC+'css',
		FILES: 		SRC+'css/**/*.css'
	},
	SCRIPTS: {
		FOLDER: 	SRC+'js',
		FILES: 		[SRC+'js/**/*.js', '!'+SRC+'js/**/config.js'],
	},
	FONTS: {
		FOLDER: 	SRC+'fonts',
		FILES: 		SRC+'fonts/**/*'
	},
	HTML: 			[SRC+'**/*.html'],
	PHP: 			[SRC+'**/*.php']
}

var BUILD = {
	MAIN: [].concat(BODOKE, './gulpfile.js'),
	FILES: [].concat(DIR.SASS, DIR.CSS.FILES, DIR.HTML)
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

gulp.task('reload', function() {
	livereload.reload();
});

gulp.task('build', function() {
	del.sync('./build');
	console.log('- REMOVED Build Dir');

	/**
	 * Create the build/
	 */
	gulp.src(BUILD.MAIN).pipe(gulp.dest('./build/'));

	/**
	 * Copy dist/
	 */
	gulp.src(DIR.SCRIPTS.FILES).pipe(gulp.dest('./build/'+SRC+'/js'));
	gulp.src(DIR.FONTS.FILES).pipe(gulp.dest('./build/'+SRC+'/fonts'));
	gulp.src(DIR.CSS.FILES).pipe(gulp.dest('./build/'+SRC+'/css'));

	/**
	 * Copy src/
	 */
	console.log('- CREATED '+BODOKE+' dir');
	gulp.src(BUILD.FILES).pipe(gulp.dest('./build/'+BODOKE));
	console.log('- CREATED '+BUILD.FILES+' dir');

	console.log('- BUILD bodokecss');
});

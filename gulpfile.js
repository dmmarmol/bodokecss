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

var bodoke 			= './scss/bodoke/';
var src 			= './src/';

// ROUTES
var paths = {
	sass: [ './scss/**/*.scss' ],
	bodokeapp: [ './scss/app.scss' ],
	bodokeexample: [ bodoke+'bodoke-example.scss' ],
	css: [ src+'css/**/*.css' ],
	compiledcss: src+'css/',
	scripts: [
		src+'css/**/*.js',
		'!'+src+'css/**/config.js'   /* exclude config.js: handled separately */
	],
	html: [src+'**/*.html'],
	php: [src+'**/*.php']
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

// gutil.log( paths.php );

// TASK
gulp.task('default', ['bdk-scss', 'watch'], function() {
	
});

// WATCH SCSS TASK
gulp.task('watch', function () {
	livereload.listen();
    gulp.watch( [paths.html, paths.php], ['reload']).on('change', function(file){
    	gulp.src(file.path)
    		.pipe(debug({title: 'Updated:'}));
    });	
    gulp.watch( [paths.sass], ['bdk-scss']).on('change', function(file){
    	gulp.src(file.path)
    		.pipe(debug({title: 'Updated:'}));
    });	
});

// Comple app.scss
gulp.task('bdk-scss', function () {
	gulp.src( paths.bodokeapp )
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
		.pipe(gulp.dest( paths.compiledcss ))
		.pipe(livereload());
});

// Comple bodoke.scss
gulp.task('bdkexample-scss', function () {
	gulp.src( paths.bodokeexample )
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
		.pipe(gulp.dest( paths.compiledcss ))
		.pipe(livereload());
});

gulp.task('reload', function() {
	livereload.reload();
});
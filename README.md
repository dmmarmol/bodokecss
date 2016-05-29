Bodoke CSS
==========

### Still at development.
###### Last release: [0.5.0 (Eagle Imani)](https://github.com/dmmarmol/bodokecss/releases/tag/0.5.0)


Bodoke it's a CSS Front-end Framework created with SASS/SCSS, made for supporting multiple grids in a single project with a minimum of custom design.  
It's a layout starter project nice and ready for you to design with your own custom identity.

*BodokeCSS* was born as a testing project where i can try any new CSS feature and practice the [CSSOOP](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) model.

The base idea of this project is to be responsive and not visualy contaminated. 
It supports desktop, mobile and tablet websites using semantic clases in html.

## Support
* IE >= 8
* Firefox >= 30
* Chrome >= 34
* Safari >= 7
* Opera >= 23
* IOS >= 7
* Android >= 4.4
* Blackberry browser >= 10


## Getting Started

* Install bower `npm install -g bower`
* Install BodokeCSS `bower install bodokecss`
* Link `"app.css"` inside your `<head>` tag


``` html
<head>
	<title>Bodoke Rocks \m/</title>
	<link rel="stylesheet" type="text/css" href="src/css/app.css"> 
</head>
<body>
	<!-- What does 'Bodoke' means?, what was this guy thinking? -->
</body>
```


(un)finished Bodoke site: http://dmmarmol.github.io/bodokecss

**Changelog:** [Here](https://github.com/dmmarmol/bodokecss/blob/master/CHANGELOG.MD)

Project docs coming soon... But if you are brave enough, you can check the code for yourself (it's documented!)


## How it works?

The `.container` class is the one whe keeps the content centered and makes your site look beautiful. You need to place it right after the `body` tag if you want to prevent the content from touching the viewport.

Then you can put as many `.row`s as you want inside the `.container` and it's mandatory that you put at least one `.col` (or `.column/.columns/.cols`) inside of each one of them.

Set the column width using the column-size classes (eg: `.c6-12` will make that block fill half of the `.row` available space)
``` html
<body>
	<main class="container">
		<div class="row">
			<div class="c6-12 cols">Half row content</div>
			<div class="c6-12 cols">Half row content</div>
		</div>
	</main>
</body>
```

## Getting Started
(this obviously need to be completed =D)

The best way is via **Bower**
```sh
bower i bodokecss --save
```
In your `bower_components` dir, clone the `bodokecss` into your **assets** or **scss** folder (preferably `scss/`)

#### Using Gulp

To make this work, you need to have already installed **[node](http://blog.diegomarmol.com.ar/getting-started-with-node-js-and-gulp-js/)** and **[gulp](http://blog.diegomarmol.com.ar/getting-started-with-node-js-and-gulp-js/)**

After Node was installed, run:
```sh
npm install gulp gulp-sass gulp-autoprefixer --save-dev
```

If you are a gulp user (if not, then let me tell you are losing valuable time) copy and paste this `task` into your `gulpfile.js` *(see: [blog.diegomarmol.com.ar](http://blog.diegomarmol.com.ar/getting-started-with-node-js-and-gulp-js/))*
```js
var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');

gulp.task('bdk', function () {
    gulp.src( './scss/bodoke.scss' ) // Set this route according to your project
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS,
            cascade: false
        }))
		.pipe(gulp.dest( './path/to/your/css/folder' ));
});
```

Now Open the **Terminal** or **CMD**, run `gulp bdk` and your CSS will be up and running!


``map-set($your-list)``

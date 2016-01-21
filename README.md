Bodoke CSS
==========

### Still at development.
###### Last release: [0.5.0 (Eagle Imani)](https://github.com/dmmarmol/bodokecss/releases/tag/0.5.0)


Bodoke it's a CSS Front-end Framework created with SASS, made for supporting multiple grids in a single project with a minimum of custom design.  
It's a layout starter project nice and ready for you to design with your own custom identity.

*BodokeCSS* was born as a testing project where i can try any new CSS feature and practice the [CSSOOP](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) model.

The base idea of this project is to be responsive and not visualy contaminated. 
It supports desktop, mobile and tablet websites using semantic clases in html.

### Support
* IE >= 8
* FF >= 30
* Chrome >= 34
* Safari >= 7
* Opera >= 23
* IOS >= 7
* Android >= 4.4
* BB >= 10

(un)finished Bodoke site: http://dmmarmol.github.io/bodokecss

**Changelog:** [Here](https://github.com/dmmarmol/bodokecss/blob/master/CHANGELOG.MD)

Project docs coming soon... But if you are brave enough, you can check the code for yourself (it's documented!)


### How it works?

Right after the `body` tag, you could place a `.container` class if you want to prevent that the content touches the viewport.
Inside the `.container` you can place as many `.row`s you want and inside of each one of them it's mandatory that you put at least one `.col` (or `.column/.columns/.cols`)
specifying their width with the col-size classes (eg: `.c6-12` will make that block fill half of the `.row` available space)
```
<body>
	<main class="container">
		<div class="row">
			<div class="c6-12 cols">Half row content</div>
			<div class="c6-12 cols">Half row content</div>
		</div>
	</main>
</body>
```
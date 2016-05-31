# Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)

### Structure

* [Base](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/base)
Project boilerplate
* [Components](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/components)
It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines.
* [Layout](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/layout)
Contains everything that takes part in laying out the site or application.
* [Lib](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/lib)
External libraries and frameworks
* [Media](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/media)
Put here the styles that affects your site depending on the user viewport (@media query)
* [Src](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/src)
Source or assets for your site (eg. Fonts, Background images, etc).
* [Themes](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/themes)
Themes for customize your project
* [Utils](https://github.com/dmmarmol/bodokecss/tree/master/bodokecss/utils)
Sass tools and helpers used across the project
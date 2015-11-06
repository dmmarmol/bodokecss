# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog](http://keepachangelog.com/CHANGELOG.md).

### Projects involved
* [Tunemypic.com](http://Tunemypic.com) 							// V: 0.0.1
* La Caja															// V: 0.0.11
* DevBus2014														// V: 0.0.2
* [Youtube/Edu Gadget](http://youtube.com/educacion)				// V: 0.0.3
* [Google ContentBox](https://github.com/google/contentbox)			// V: 0.0.5
* [Convoy testapp platform](http://audits-platform.appspot.com/)	// V: 0.1.0 - New Grid
* DevBus - Egipto													// V: 0.1.2 (Amon Carolina)
* Status update														// V: 0.1.3 (Amon Demian)
* GCBA - Padres														// V: 0.1.4 (Amon Ed)
* [Codigoquemero](http://codigoquemero.com.ar)						// V: 0.1.5 (Amon Fabian)
* [Mundoconsulta](http://mundoconsulta.com)							// V: 0.1.6 (Amon Gabriel)
* [Codigoquemero v2](http://codigoquemero.com.ar)					// V: 0.2.2 (Baako Hagen)
* Status Update 			// V: 0.2.3 (Baako Icarus)
* Status Update 			// V: 0.2.7 (Baako Maarav)
* Status Update 			// V: 0.3.0 (Caesar Odysseus)
* Status Update 			// V: 0.4.0 (Daan Yaffa)  
	* Project architecture adapted according to [HugoGiraudel Sass boilerplate template](https://github.com/HugoGiraudel/sass-boilerplate)
* Status Update 			// V: 0.5.0 (Eagle Imani)  
	* BodokeCSS is Mobile First

_________________

### Bodoke Status - 2015

## [Unreleased] - unreleased

## [0.5.0 Eagle Imani ]  - 2015-11-09
#### Updated

## [0.4.0 Daan Yaffa] - 2015-10-01
#### Updated
- Preparando el bodokecss para soportar el desarrollo de aplicaciones externas [`django-dkb-forms`](https://github.com/ConvoyHQ/django-bdk-forms)
- Update en `"component/_input.scss"`
- Update en la declaración de `media-query` para dispositivos moviles
- `"component/_menu.scss": clase `.menu` ahora se define en encabezado del archivo bajo la variable `$bdk-menu`
- `"grid/_grid.scss"`: file-level annotations al estandar de [sassdoc.com](http://sassdoc.com)
- Fixed typo in `"component/_modal.scss"`
- Fixed typo in `"js/bdk-lightbox.js"`
- `-webkit-` prefix deprecated in `box-shadow()` & `border-radius()` mixins 
- Mejoras en el `@mixin line-clamp()`
- Fixed typo on `@mixin screen()`
- Project architecture adapted according to [HugoGiraudel Sass boilerplate template](https://github.com/HugoGiraudel/sass-boilerplate)

#### Added
- Nuevo archivo que reune la configuración principal del bodokecss `"settings/_settings.scss"`
- Nuevo `"components/social/_button-social.scss"` para maquetar botones de redes sociales.
- Nuevos colores de redes sociales en `"settings/_colors.scss"` y `"components/_modals.scss"`
- Nuevo `@mixin z($list)` que ordena automaticamente los elementos en el eje *Z* de acuerdo al orden que tengan en una lista que se debe pasar como primer parametro
- Nueva funcion `ifcolor()`: imprime el color de texto según el color de fondo que se pase como parametro
- Nuevo `@mixin animation-count($times)`: enumera la cantidad de veces que se repite una animación.
	
## [0.3.0 Caesar Odysseus] - 2015-06-01
#### Updated
- `"component/_list.scss"` Ahora las listas por default son horizontales y mostradas como `inline-block`
- `"component/_sidenav.scss"` - new active state
#### Added
- `bdk-rating.js` para controlar puntajes en post (incomplete)
- `bdk-lightbox.js` -> processlbox(). Function to be triggered before the 'lightbox' is closing


---
#### [2015-20-05] Primer año del Bodoke!
---


## [0.2.7 Baako Maarav] - 2015-05-18
#### Updated
- Update en `"component/_input.scss"`
- Update en `"component/_list.scss"`
- Update en `"component/_dropdown.scss"` - Adaptado para [sassdoc](sassdoc.com)
- Update en `"component/_texto.scss"`

#### Added
- `"component/_modal.scss"`: bloques de contenido despegados del fondo
- `"component/_sidenav.scss"`: estilizar menus verticales como <aside> content


## [0.2.3 Baako Icarus] - 2015-05-11
#### Updated
- `"component/_lightbox.scss"`: Prefijos para clases, alineados con `"bdk-lightbox.js"`
- `"component/_menu.scss"`: Reformulacion de los menu. Ya no necesitan de la clase `.list` para funcionar
- `"component/_buttons.scss"`: '.button-clear' sujeto a si posee borde o no
- `"component/_buttons.scss"`: Nuevo '.button-clean' -> Botones sin fondo pero con hover
- `"component/_buttons.scss"`: Se ajustaron los tamaños de font-icons dentro de diferentes tamaños de botones 
- `"component/_buttons.scss"`: Se ajustaron clases para los tamaños 
- `"component/_list.scss"`: Compatible con los menu nativos de wordpress
- `"component/_input.scss"` - Ahora las columnas aplicadas a las `.input-row` procesan mejor los paddings a ambos lados permitiendo alinearse mejor entre distintos anchos de columnas sin depender de un `.row`
- Update `"settings/_helpers.scss"` 
- Update `"component/_input.scss"`
- `[role="button"]` solo tiene efecto para los tags `<input>` o `<button>`
- Division en las hojas de estilos compartidos entre los inputs y los botones
- `"component/_buttons.scss"` - Clases de alineamiento con prefijo (Ej.: `.#{$button-prefix}-inline-block`)
- `"component/_input.scss"` - Soporte para `[role="button"]`
- `"gid/_grid.scss"`. Nuevo offset particular de la grilla.
- `"component/_comments.scss"`. Sectores ordenados con comentarios y ejemplo de estructura

#### Added
- `@mixin` para alinear .items dentro de .menu en `"_list.scss"`
- `"js/bdk-menu"` para el comportamiento de los `.menu`
- `"_buttons.scss"`: `@mixin menu-button-color()` para los botones que estan dentro de `.menu`
- helper en `"_helpers.scss"` `.transparent` vuelve al elemento con `opaicity:0;`
- `.clean-panel` para mensajes de `Contenido vacio` o alertas no intrusivas
- `.modal-box` para maquetar mensajes estilo pop-up pero relativos.
- Nueva clase `.bdk-input` en `"component/_input.scss"`
- Lista con colores de redes sociales en `"component/_colors.scss"` -> $social-color-pallete;
- Nueva función `is-brightness()`. Evalua el color de fondo pasado en el primer parametro y elije color claro u obscuro segun su luminosidad
- `.list-inline-block` `li:first-child()` con `margin-left: 0;`. Previene que se salga del contenedor


## [0.2.0 Baako Hagen] - 2015-04-10
#### Deleted
- No hay más hover por default en los `.item`

#### Updated
- `bodoke/grid/_reset.scss`
- `bdk-dropdown.js` ("parent()" is now "parents()")
- `bodoke/component/_dropdown.scss`

#### Added 	
- `_burger.scss` - [Repository](https://github.com/jorenvanhee/sass-burger/)


## [0.1.6 Amon Gabriel] - 2015-04-08
#### Updated
- `bodoke/grid/_grid.scss`
- `bodoke/component/dropdown`
- `$offset` variable ahora se mide en pixeles y no en ems ($base-em)

#### Changed
- `_colors.scss`: renombradas las clases que dan color de fondo y color de texto según los colores de la lista `$color-pallete`.
- Renombrada la función `i()` por `z()`, para devolver los indices de una lista y usar dentro del z-index.

#### Added
- Modulo para las medidas de espaciado en las `.row-*` con $offset
- Nueva variable para el nombre de la clase `$container`. Nueva clase `#{$container}-full`
- Nueva función `c()` para tomar los colores definidos previamente en el array `$color-pallete` (`_colors.scss`).
- Nueva función `reverse()` para invertir orden en las listas de SASS - by [HugoGiraudel.com](http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/)
- Nueva función `i()` para obtener el indice de una lista y multiplicarlo * 10


## [0.1.4 Amon Ed] - 2014-12-30
#### Changed
- `code.scss` `<pre>` tag estilizado con `<span>` para comentarios y carpetas
- Nuevo `@mixin android-input-border` para estilizar inputs como en Android

#### Added
- Nuevas funciones de [HugoGiraudel.com](http://hugogiraudel.com/2013/08/12/sass-functions/) para manipular listas en SASS
- Nuevo `@mixin flexbox();`


## [0.1.3 Amon Demian] - 2014-11-25
#### Changed
- Actualizacion y organizacion del framework 0.1.3

#### Added
- Nueva `_transformations.scss` que define clases para animar objetos pero solo con la propiedad `transform`, sin utilizar keyframes.
- Proyecto GCBA padres
- Nuevo color `dark` para los botones (`.button-dark`)
- `@mixin color();` ahora afecta también a todos los descendientes que sean `<a>`


## [0.1.2 Amon Carolina] - 2014-11-17
#### Changed
- Primera version con nombre: `Amon Carolina`
- Las columnas de la grilla ahora cambian su dirección de flotado dependiendo si [dir="rtl"] - grid 1.4

#### Added
- `_comments.scss` Nuevo componente para comentarios en redes sociales


## [0.1.0]
#### Changed
- New Grid


## [0.0.11] - 2014-09-19
#### Changed
- Upgrade en la grilla


## [0.0.1] - 2014-05-20
- Nacimiento / BodokeCSS was born

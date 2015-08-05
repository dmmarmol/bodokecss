Bodoke CSS
==========

### Still at development.
###### Current versión: Beta 0.3.1 (Caesar Odysseus)


Bodoke is a CSS/SCSS Front-end Framework created for supporting multiple grids in a single project with a minimum of custom design. Is visually clean for you to design with your own custom identity.

His base idea is to be responsive and not visualy contaminated. 
It supports desktop, mobile and tablet websites using semantic clases in html.

(un)finished Bodoke site: http://dmmarmol.github.io/bodokecss

Project docs coming soon...


## Changelog

### Projects involved
* Tunemypic.com 			// V: 0.0.1
* La Caja					// V: 0.0.11
* DevBus2014				// V: 0.0.2
* Youtube/Edu Gadget		// V: 0.0.3
* Google ContentBox			// V: 0.0.5
* Convoy testapp platform	// V: 0.1.0 - New Grid
* DevBus - Egipto			// V: 0.1.2 (Amon Carolina)
* Status update				// V: 0.1.3 (Amon Demian)
* GCBA - Padres				// V: 0.1.4 (Amon Ed)
* Codigoquemero				// V: 0.1.5 (Amon Fabian)
* Mundoconsulta				// V: 0.1.6 (Amon Gabriel)
* Codigoquemero v2			// V: 0.2.2 (Baako Hagen)
* Status Update 			// V: 0.2.3 (Baako Icarus)
* Status Update 			// V: 0.2.7 (Baako Maarav)
* Status Update 			// V: 0.3.0 (Caesar Odysseus)


#### Bodoke Status - 2015

* 19/06 	
	* Preparando el bodokecss para soportar el desarrollo de aplicaciones externas `django-dkb-forms`
	* Nuevo archivo que reune la configuración principal del bodokecss settings/_settings.scss
* 19/06 	
	* Nuevo "components/social/_button-social.scss" para maquetar botones de redes sociales.
* 18/06
	* Update en "_input.scss"			
* 02/06
	* Nuevos colores de redes sociales en "_colors.scss" y "_modals.scss"
* 01/06
	* Nueva version 0.3.0 (Caesar Odysseus)
* 29/05
	* Nuevo `bdk-rating.js` para controlar puntajes en post (incomplete)
	* `bdk-lightbox.js` -> processlbox()
	* `_list.scss` Ahora las listas por default son horizontales y mostradas como 'inline-block'
* 27/05 	
	* Update en "_sidenav.scss" - new active state
* 20/05 	
	* ## Primer año del Bodoke! ##
* 18/05 	
	* Nueva version 0.2.7
	* Update en "_input.scss"
	* Update en "_list.scss"
	* Nuevo "_modal.scss" para bloques de contenido despegados del fondo
	* Nuevo "_sidenav.scss" para estilizar menus verticales como <aside> content
* 15/05 
	* Update en "_dropdown.scss" - Adaptado para sassdoc
* 12/05	
	* Update en "_texto.scss"
* 11/05	
	* 0.2.3 (Baako Icarus)
 	* Update en "_lightbox.scss": Prefijos para clases, alineado con 'bdk-lightbox.js'
* 08/05 	
	* Update en "_menu.scss": Reformulacion de los menu. Ya no necesitan de la clase ".list" para funcionar
	* @mixin para alinear .items dentro de .menu en "_list.scss"
	* Update en "_buttons.scss": '.button-clear' sujeto a si posee borde o no
	* Nuevo "js/bdk-menu" para el comportamiento de los '.menu'
	* Nuevo en "_buttons.scss": @mixin menu-button-color() para los botones que estan dentro de '.menu'
* 06/05 	
	* Update en "_buttons.scss": Nuevo '.button-clean' -> Botones sin fondo pero con hover
* 05/05 	
	* Nuevo helper en "_helpers.scss" '.transparent' vuelve al elemento con "opaicity:0;"
	* Update en "_buttons.scss": Se ajustaron los tamaños de font-icons dentro de diferentes tamaños de botones 
* 04/05	
	* Update en "_buttons.scss": Se ajustaron clases para los tamaños 
	* Update en "_list.scss": Compatible con los menu nativos de wordpress
* 28/04	
	* Update en "_buttons.scss" y "_helpers.scss"
	* "_input.scss" - Ahora las columnas aplicadas a las ".input-row" procesan mejor los paddings a ambos lados permitiendo alinearse mejor entre distintos anchos de columnas sin depender de un ".row"
* 27/04	
	* Update "bodoke/settings/_helpers.scss" 
	* Nuevos ".clean-panel" para mensajes de "Contenido vacio" o alertas no intrusivas
	* Nuevos ".modal-box" para maquetar mensajes estilo pop-up pero relativos.
* 27/04	- Update "bodoke/component/_input.scss" 
	* [role="button"] solo tiene efecto para los 'input' o 'button'
	* Division en los estilos compartidos entre los inputs y los botones
* 27/04	
	* Update "bodoke/component/_buttons.scss" - Clases de alineamiento con prefijo #{$button-prefix}
* 22/04	
	* Update "bodoke/component/_input.scss" - Soporte para [role="button"]
* 22/04	
	* Clase 'bdk-input' en "bodoke/component/_input.scss"
* 22/04	
	* Update en "bodoke/grid/_grid.scss". Nuevo 'offset' particular de la grilla.
* 21/04 	
	* Update en "bodoke/component/_comments.scss". Sectores ordenados con comentarios y ejemplo de estructura
* 17/04 	
	* lista con colores de redes sociales en "_colors.scss" -> $social-color-pallete;
* 15/04	
	* Nueva función "is-brightness()". Evalua el color de fondo pasado en el primer parametro y elije color claro u obscuro segun su luminosidad
* 14/04	
	* .list-inline-block li:first-child() con "margin-left: 0;". Previene que se salga del contenedor
* 10/04	
	* 0.2.0 (Baako Hagen);
* 10/04	
	* Update "parent()" -> "parents()" en "bdk-dropdown.js"
	* Removido: hover por default en los '.item'
 	* Update "bodoke/component/_dropdown.scss"
	* Nuevo "_burger.scss" - [Repository](https://github.com/jorenvanhee/sass-burger/)
* 09/04	
	* Update "bodoke/grid/_reset.scss"
* 08/04	
	* 0.1.6 (Amon Gabriel)
	* $offset variable ahora se mide en pixeles y no en ems ($base-em)
* 07/04	
	* Update "bodoke/grid/_grid.scss"
	* Update "bodoke/component/dropdown"
	* Modulo para las medidas de espaciado en las .row-* con $offset
	* Nueva variable para el nombre de la clase $container. Nueva clase #{$container}-full
* 10/03	
	* "_colors.scss": renombradas las clases que dan color de fondo y color de texto según los colores del array "$color-pallete".
* 02/03	
	* Nueva función "c()" para tomar los colores definidos previamente en el array "$color-pallete" ("_colors.scss").
* 09/02	
	* Renombrada la función "i()" por "z()", para devolver los indices de una lista y usar dentro del z-index.
* 30/11 
	* Nueva función "reverse()" para invertir orden en las listas de SASS - by [link](http://hugogiraudel.com)
* 29/01	
	* Nueva función "i()" para obtener el indice de una lista y multiplicarlo * 10


#### Bodoke Status - 2014

* 30/12 	- `code.scss` `<pre>` tag estilizado con `<span>` para comentarios y carpetas
			- Nuevo android-input-border @mixin para estilizar inputs como en Android
* 29/12 	- Nuevo flexbox() @mixin
* 11/12 	- Nuevas funciones de HugoGiraudel.com para manipular listas en SASS
* 11/12 	- 0.1.4 (Amon Ed)
* 25/11 	- Proyecto GCBA padres
 		 	- Nuevo color "dark" para los botones
 		 	- @mixin color() ahora afecta también a todos los descendientes que sean `<a>`
* 20/11 	- Nueva "_transformations.scss" que define clases para animar objetos pero solo con la propiedad "transform", sin utilizar keyframes.
* 17/11 	- Actualizacion y organizacion del framework 0.1.3
* 14/11 	- Las columnas de la grilla ahora cambian su dirección de flotado dependiendo si [dir="rtl"] - grid 1.4
* 13/11 	- Nuevo objeto "comments", para comentarios en redes sociales
* 13/11 	- Primera version con nombre: 0.1.2 (Amon Carolina)
* 19/09 	- Upgrade en la grilla
* 20/05 	- Nacimiento	 

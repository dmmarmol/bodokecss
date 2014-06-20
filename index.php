<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js ie lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js ie lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js ie lt-ie9"> <![endif]-->
<!--[if IE]>           <html class="no-js ie"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		<title>Bodoke | Framework</title>
		<link rel="stylesheet" href="css/app.css" />


		<!-- SCRIPT -->
		<!-- <script src="js/vendor/jquery.js" type="text/javascript" charset="utf-8" async defer></script> -->
		<script src="js/vendor/jquery.min.js" type="text/javascript" charset="utf-8" async defer></script>
	</head>
<body>

	<!-- Encabezado del sitio -->
	<header class="example-header">
		<div class="container">
			<h1>Bodoke CSS</h1>
			<small>Esto es Bodoke, baby</small>
		</div>
	</header>

	<!-- Contenido del sitio -->
	<div class="container example-container">

		<div class="row">
			<div class="c12-12 cols">
				<p class="lead">
					Este es el framework que vamos a usar.
					Para estructurarlo necesitas primero un <strong>div.container</strong>
					que centra todo el contenido <br>
					Dentro del .container vas poniendo las filas <strong>.row</strong>
					y dentro de cada fila <strong>(SI O SI)</strong> una o más columnas
					(revisa el codigo fuente para verlo.
				</p>
			</div>
		</div>

		<hr>

		<!-- Nueva Grilla -->
		<section class="example-content">
			<div class="row">
				<div class="c12-12 cols">
					<div class="row">
						<h2 id="#grid">Grilla</h2>
						<hr>
					</div>
					<div class="row example">
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
						<div class="cols c1-12">c1-12</div>
					</div>
				</div>
			</div>
		</section>

		<!-- 3 Columnas -->
		<section class="example-content">
			<div class="row">
				<div class="c12-12 cols">
					<div class="row">
						<h2 id="#grid">Grilla</h2>
						<hr>
					</div>
					<div class="row example">
						<div class="c4-12 cols">.c4-12 .cols</div>
						<div class="c4-12 cols">.c4-12 .cols</div>
						<div class="c4-12 cols">.c4-12 .cols</div>
					</div>
					<div class="row">
<pre>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c4-12 cols"</span><span class="nt">&gt;</span>.c4-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c4-12 cols"</span><span class="nt">&gt;</span>.c4-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c4-12 cols"</span><span class="nt">&gt;</span>.c4-12 .cols<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</pre>
					</div>
				</div>
			</div>
		</section>

		<section class="example-content">
			<div class="row">
				<div class="c12-12 cols">
					<!-- 2 Columnas -->
					<div class="row row-one example">
						<div class="c6-12 cols">.c6-12 .cols</div>
						<div class="c6-12 cols">.c6-12 .cols</div>
					</div>
					<div class="row">
<pre>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c6-12 cols"</span><span class="nt">&gt;</span>.c6-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c6-12 cols"</span><span class="nt">&gt;</span>.c6-12 .cols<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</pre>
					</div>
					<!-- 3 Columnas -->
					<div class="row row-one example">
						<div class="c4-12 cols">.c4-12 .cols</div>
						<div class="c4-12 cols">.c4-12 .cols</div>
						<div class="c4-12 cols">.c4-12 .cols</div>
					</div>
					<div class="row">
<pre>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c4-12 cols"</span><span class="nt">&gt;</span>.c4-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c4-12 cols"</span><span class="nt">&gt;</span>.c4-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c4-12 cols"</span><span class="nt">&gt;</span>.c4-12 .cols<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</pre>				
					</div>
					<!-- 4 Columnas -->
					<div class="row row-one example">
						<div class="c3-12 cols">.c3-12 .cols</div>
						<div class="c3-12 cols">.c3-12 .cols</div>
						<div class="c3-12 cols">.c3-12 .cols</div>
						<div class="c3-12 cols">.c3-12 .cols</div>
					</div>
					<div class="row">
<pre>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c3-12 cols"</span><span class="nt">&gt;</span>.c3-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c3-12 cols"</span><span class="nt">&gt;</span>.c3-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c3-12 cols"</span><span class="nt">&gt;</span>.c3-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c3-12 cols"</span><span class="nt">&gt;</span>.c3-12 .cols<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</pre>
					</div>
					<!-- 6 Columnas -->
					<div class="row row-one example">
						<div class="c2-12 cols">.c2-12 .cols</div>
						<div class="c2-12 cols">.c2-12 .cols</div>
						<div class="c2-12 cols">.c2-12 .cols</div>
						<div class="c2-12 cols">.c2-12 .cols</div>
						<div class="c2-12 cols">.c2-12 .cols</div>
						<div class="c2-12 cols">.c2-12 .cols</div>
					</div>
					<div class="row">
<pre>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c2-12 cols"</span><span class="nt">&gt;</span>.c2-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c2-12 cols"</span><span class="nt">&gt;</span>.c2-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c2-12 cols"</span><span class="nt">&gt;</span>.c2-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c2-12 cols"</span><span class="nt">&gt;</span>.c2-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c2-12 cols"</span><span class="nt">&gt;</span>.c2-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c2-12 cols"</span><span class="nt">&gt;</span>.c2-12 .cols<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</pre>
					</div>
					<!-- 12 Columnas -->
					<div class="row row-one example">
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
						<div class="c1-12 cols">.c1-12 .cols</div>
					</div>
					<div class="row">
<pre>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
	<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"c1-12 cols"</span><span class="nt">&gt;</span>.c1-12 .cols<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</pre>
					</div>
				</div>
			</div>
		</section>


		<section class="example-content">	
			<div class="row row-one">
				<div class="c12-12 cols">
					<h3>CSS</h3>
					<pre class="css">
						.container {
							propiedad: valor;
						}
					</pre>
					<h3>HTML</h3>
					<code>&lt;section&gt;</code>
				</div>
			</div>
		</section>

		<section class="example-content">	
			<div class="row example">
				<div class="c12-12 cols">Doce columnas</div>
			</div>
		</section>

		<section class="example-content">	
			<div class="row example">
				<div class="c3-12 cols">Tres columnas a la izquierda</div>
				<div class="c5-12 offset-4-12 cols">Cinco columnas a la derecha con margen izquierdo</div>
			</div>
		</section>


		<section class="example-content">	
			<div class="row example">
				<div class="c6-12 cols">
					<div class="row">
						<div class="c3-12 cols">3 Columnas</div>
						<div class="c3-12 cols">3 Columnas</div>
						<div class="c3-12 cols">3 Columnas</div>
						<div class="c3-12 cols">3 Columnas</div>
					</div>
				</div>
				<div class="c6-12 cols">
					<div class="row">
						<div class="c12-12 cols">1 columna</div>
					</div>
				</div>
			</div>

			<div class="row row-one">
				<div class="c12-12 cols">
					<button class="button">Boton #1</button>
					<button class="button large">Boton #2</button>
					<button class="button red">Boton #3</button>
				</div>
			</div>
		</section>

		<section class="example-content">
			<h2>Columnas para mobile <strong>.mobile</strong></h2>
			<div class="row example">
				<div class="c4-12 mobile cols">4 Columnas mobile</div>
				<div class="c4-12 mobile cols">4 Columnas mobile</div>
				<div class="c4-12 mobile cols">4 Columnas mobile</div>
			</div>
		</section>

		<section class="example-content">
			<h2>Columnas para tablet <strong>.tablet</strong></h2>
			<div class="row example">
				<div class="c4-12 tablet cols">4 Columnas tablet</div>
				<div class="c4-12 tablet cols">4 Columnas tablet</div>
				<div class="c4-12 tablet cols">4 Columnas tablet</div>
			</div>			
		</section>

		<!--
		<section class="example-content">
			<h2>Columnas que collapsan en resoluciones menores a <strong>800px</strong></h2>
			<div class="row example">
				<div class="c4-12 cols">4 Columnas tablet</div>
				<div class="c4-12 cols">4 Columnas tablet</div>
				<div class="c4-12 cols">4 Columnas tablet</div>
			</div>			
		</section>
		-->

	</div>
</body>
</html>

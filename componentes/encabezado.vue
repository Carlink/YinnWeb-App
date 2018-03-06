<template id="encabezado">
	<div>
	<md-toolbar>
		<md-theme md-name="boton">
				<md-button class="md-primary lowercase">Proveedores</md-button><div class="headerDivider"></div>
				<md-button class="md-primary lowercase">Freelance</md-button><div class="headerDivider"></div>
				<md-button class="md-primary lowercase">Eventos</md-button><div class="headerDivider"></div>
				<md-button class="md-pimary lowercase">Cursos y certificaciónes</md-button><div class="headerDivider"></div>
				<md-menu>
					<md-button class="md-primary lowercase" md-menu-trigger>
						Publicar
						<md-icon>arrow_drop_down</md-icon>
					</md-button>
					
					<md-menu-content>
						<md-menu-item>My Item 1</md-menu-item>
						<md-menu-item>My Item 2</md-menu-item>
						<md-menu-item>My Item 3</md-menu-item>
					</md-menu-content>
				</md-menu>
				<md-button class="md-raised md-accent lowercase botonredondo">
					Soy un{{ msgusuario }}
				</md-button>
		</md-theme>
	</md-toolbar>
	</div>
</template>

<script>
	module.exports = {
		props: {
			tipousuario: {
				type: String,
				required: true
			}
		},
		data: function() {
			if(this.tipousuario == 'Empresa')
				return {msgusuario: 'a '+this.tipousuario}
			else
				return {msgusuario: ' '+this.tipousuario}
		}
	}
</script>

<style scoped>
.body {
	font-size: 13;
}
.lowercase {
	text-transform: none;
	margin: 0;
	padding: 0 8px;
	font-size: 13;
	vertical-align: baseline;
}
.botonredondo {
	border-radius: 15px;
}
.headerDivider {
	border-left:1px solid #263238;
	border-right:1px solid #ffffff;
	height:20px;
	position:static;
	display: inline;
	padding-bottom: 2px;
	padding-top: 2px;
}
.md-toolbar {
	flex-direction: row-reverse;
}
<style>
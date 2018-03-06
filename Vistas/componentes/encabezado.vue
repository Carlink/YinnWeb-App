<template id="encabezado">
	<div>
		<md-toolbar>
			<md-theme md-name="boton">
				<!--@click="toggleLeftSidenav"-->
				<md-button class="md-primary lowercase">Proveedores</md-button><div class="headerDivider"></div>
				<md-button class="md-primary lowercase">Freelance</md-button><div class="headerDivider"></div>
				<md-button class="md-primary lowercase">Eventos</md-button><div class="headerDivider"></div>
				<md-button class="md-pimary lowercase">Cursos y certificaciónes</md-button><div class="headerDivider"></div>
				<md-menu md-align-trigger md-direction="bottom left" md-size="5">
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
				<md-button class="md-raised md-accent lowercase botonNombreUsuario">
					Soy un{{ msgusuario }}
				</md-button>
			</md-theme>
		</md-toolbar>
		<md-sidenav class="md-left" ref="leftSidenav">
			<md-toolbar class="md-large toolbarsidenav">
				<div class="fotodivlateral">
					<md-button class="md-fab">
						<md-avatar class="md-large">
							<img :src="profilepicpath" alt="Usuario">
						</md-avatar>
					</md-button>
				</div>
				<md-theme md-name="boton">
						<md-button class="md-raised botonmenuladocabezal">{{ username }}</md-button>
						<md-button class="md-raised botonmenuladocabezal">{{ email }} <md-icon>arrow_drop_down</md-icon></md-button>
				</md-theme>
			</md-toolbar>
				<md-theme md-name="boton">
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">assessment</md-icon> Dashboard</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">person</md-icon> Preregistro</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">bookmark</md-icon> Cupones</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">done</md-icon> Validación</md-button>
					<md-divider class="md-inset"></md-divider>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">face</md-icon> Profesionistas</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">domain</md-icon> Empresas</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">local_mall</md-icon> Vacantes</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonladoporc">%</md-icon> Compatibilidad</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">search</md-icon> SEO</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">credit_card</md-icon> Pagos</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">donut_small</md-icon> Skills, Aptitudes e Idiomas</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">comment</md-icon> Notificaciones</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">school</md-icon> Educación</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">event</md-icon> Eventos</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">import_contacts</md-icon> Cursos y certificaciones</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">group</md-icon> Administradores</md-button>
					<md-button class="botonmenulado"><md-icon class="iconobotonlado">text_format</md-icon> Blog</md-button>
				</md-theme>
		</md-sidenav>
	</div>
</template>

<script>
	module.exports = {
		props: {
			informacion: {
				type: Array,
				required: true,
				default: function(){
					return {
						profilepicpath: '#',
						username: 'User',
						email: 'email',
						msgusuario: ' tipo de usuario'
					}
				}
			}
		},
		data: function() {
			if(this.informacion[0] == 'Empresa')
				return {
					profilepicpath: this.informacion[4],
					username: this.informacion[1],
					email: this.informacion[2],
					msgusuario: 'a '+this.informacion[0]
				}
			else
				return {
					profilepicpath: this.informacion[4],
					username: this.informacion[1],
					email: this.informacion[2],
					msgusuario: ' '+this.informacion[0]
				}
		},
		methods: {
			toggleLeftSidenav() {
				this.$refs.leftSidenav.toggle();
			}
		}
	}
</script>

<style scoped>
.iconobotonladoporc {
	font-weight: bold;
	padding-right: 50px;
	font-family: "Nunito";
}
.iconobotonlado {
	padding-right: 50px;
}
.md-inset {
	margin: 0 !important;
}
.toolbarsidenav {
	flex-direction: column !important;
	align-items: initial;
	padding: 0;
}
.botonmenuladocabezal {
	text-transform: none;
	text-align: left;
	width: 100%;
	margin: 0;
	box-shadow: none !important;
}
.botonmenulado {
	text-transform: none;
	width: 100%;
	color: black;
	margin: 0;
	box-shadow: none !important;
	text-align: left;
}
.fotodivlateral {
	padding-top: 20px;
	position: relative;
}
.md-button {
	font-family: "Nunito";
	font-size: 13px;
}
.lowercase {
	text-transform: none;
	margin: 0;
	padding: 0 8px;
	font-size: 13;
	vertical-align: baseline;
}
.botonNombreUsuario {
	border-radius: 15px;
	margin-right: 100px;
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
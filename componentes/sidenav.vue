<template id="encabezado">
	<v-navigation-drawer class="ajusteSideNav" temporary v-model="drawer"  light overflow absolute>
		<div class="blue-grey darken-4">
			<v-list class="pl-2" dark>
				<v-list-tile avatar tag="div">
					<v-layout column>
					<v-list-tile-avatar class="pt-2">
						<img :src="profilepicpath" />
					</v-list-tile-avatar>
					<v-list-tile-content>
							<v-list-tile-title class="pt-2">{{nombreususario}}</v-list-tile-title>
							<v-list-tile-sub-title class="pb-2">{{correousuario}}</v-list-tile-sub-title>
					</v-list-tile-content>
					</v-layout>
				</v-list-tile>
			</v-list>
		</div>
		<v-list class="pt-0" dense>
			<v-divider></v-divider>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>assessment</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Dashboard</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>person</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Preregistro</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>bookmark</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Cupones</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>done</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Validación <div v-if="cuentavalidaciones > 0" id="validacionesbit" class="alerta">{{cuentavalidaciones}}</div> <div v-else id="validacionesbit" class="noalerta">{{cuentavalidaciones}}</div> </v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-divider></v-divider>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>face</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Profesionistas</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>domain</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Empresas</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>local_mall</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Vacantes</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>%</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Compatibilidad</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>search</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>SEO</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>credit_card</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Pagos</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>donut_small</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Skills, Aptitudes e Idiomas</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>comment</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Notificaciones</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>school</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Educación</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>event</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Eventos</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>import_contacts</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Cursos y certificaciones</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>group</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Administradores</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>text_format</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>Blog</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		props: {
			informacion: {
				type: Array,
				required: true,
				default: function(){
					return {
						cuentavalidaciones: '0',
						profilepicpath: 'https://randomuser.me/api/portraits/men/85.jpg',
						nombreususario: 'User',
						correousuario: 'email',
						msgusuario: ' tipo de usuario',
						drawer: null
					}
				}
			}
		},
		data: function() {
			if(this.informacion[0] == 'Empresa')
				return {
					cuentavalidaciones: this.informacion[4],
					profilepicpath: this.informacion[3],
					nombreususario: this.informacion[1],
					correousuario: this.informacion[2],
					msgusuario: 'a '+this.informacion[0],
					drawer: null
				}
			else
				return {
					cuentavalidaciones: this.informacion[4],
					profilepicpath: this.informacion[3],
					nombreususario: this.informacion[1],
					correousuario: this.informacion[2],
					msgusuario: ' '+this.informacion[0],
					drawer: null
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
.list__tile--avatar {
	height: auto;
}
.ajusteSideNav {
	padding-bottom: 0 !important;
}
.alerta {
	background: #e53935;
}
.noalerta {
	background: grey;
}
#validacionesbit{
	display: inline-block;
	margin-left: 70px;
	border-radius: 15px;
	min-width: 40px;
	text-align: center;
	color: white;
	line-height: 25px;
}
<style>
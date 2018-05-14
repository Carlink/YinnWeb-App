<template>
	<span class="white" >
		<v-layout>
			<v-spacer></v-spacer>
			
				<v-btn
					@click.stop="nuevarutina_dialog=true"			
		            color="primary"
		            dark
		          	>
		          	Nueva Rutina
		    		<v-icon right>add</v-icon>
		      	</v-btn>
		      	
		</v-layout>
		
		<div style="height: 95%;overflow: scroll;">
		<v-list two-line >
			<v-subheader v-text="header"></v-subheader>
          	<template v-for="(item, index) in rutinas">            
            <v-list-tile avatar v-bind:key="item.title">
	            <v-list-tile-avatar @click="actividad(index, item.activo)">
	            	<img v-bind:src="item.activo ? '/img/green.svg' : '/img/red.svg'">
	            </v-list-tile-avatar>
              	<v-list-tile-content>
                	<v-list-tile-title v-html="item.nombre"></v-list-tile-title>
                	<v-list-tile-sub-title v-html="item.descripcion">
                		
                	</v-list-tile-sub-title>
              	</v-list-tile-content>
              	<v-list-tile-action>
              		<v-menu offset-y>
		              	<v-btn icon ripple slot="activator">
		                	<v-icon color="grey lighten-1">more_vert</v-icon>
		              	</v-btn>
	              		<v-list>
	              			<v-list-tile>
			         			<v-list-tile-title @click="actividad(index, item.activo)">{{item.activo ? 'Desactivar Rutina' : 'Activar Rutina'}}</v-list-tile-title>
			        		</v-list-tile>
			        		<v-list-tile>
			         			<v-list-tile-title @click="editarRutina(index)">Editar Rutina</v-list-tile-title>
			        		</v-list-tile>
			        		<v-list-tile>
			         			<v-list-tile-title @click="eliminarPre(index)" class="red--text">Eliminar Rutina</v-list-tile-title>
			        		</v-list-tile>
			    		</v-list>
	      			</v-menu>
	            </v-list-tile-action>
            </v-list-tile>
            <v-divider :inset="true"></v-divider>
          </template>

          <template v-if="!rutinas">            
            <v-list-tile>
				No cuenta con ninguna rutina
            </v-list-tile>
          </template>

        </v-list>
        </div>

	<v-dialog v-model="nuevarutina_dialog" max-width="500px">
        <v-card>
          	<v-card-title class="title">
            	<div>Nueva Rutina</div>
	            	<v-spacer></v-spacer>
	            	<v-btn icon @click.stop="nuevarutina_dialog=false">
		          	<v-icon>close</v-icon>
		          	</v-btn>
          	</v-card-title>
          	<v-card-text>
	            <v-text-field
		            label="Nombre"
		            v-model="rutina.nombre"
	            ></v-text-field>
	            <v-text-field
		            label="Breve descripción"
		            v-model="rutina.descripcion"
	            ></v-text-field>
          	</v-card-text>
        <v-card-actions>
        	<v-spacer></v-spacer>
          	<v-btn color="primary" dark raised @click="crearRutina()">
          	Crear
          	</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="eliminar_dialog" max-width="500px">
        <v-card>
          	<v-card-title class="title">
            	¿Está seguro que desea eliminar esta rutina?
          	</v-card-title>
          	<v-card-text>
	            Si selecciona 'SI', ya no podra recuperar su rutina.
          	</v-card-text>
        <v-card-actions>
        	<v-spacer></v-spacer>
        	<v-btn color="primary" dark raised @click="eliminar_dialog = false">
          	No
          	</v-btn>
          	<v-btn color="error" dark raised @click="eliminarRutina(eliminarActual)">
          	Si
          	</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>

	</span>
</template>

<script>
	import firebase from '~/utils/firebase/firebase.js';

	export default {
	    data () {
		    return {
		    	eliminar_dialog: false,
		    	eliminarActual: '',
		    	nuevarutina_dialog: false,
		    	header: 'Rutinas',
		    	rutinas: {},
		    	opciones: [
				    { title: 'Editar' },
				    { title: 'Eliminar' },
			    ],
			    rutina: {
			    	eliminar_dialog: false,
			    	nombre: '',
			    	descripcion: '',
			    	activo: false,
			    	code: '',
			    	blocks_xml: ''
			    }
			    ,
		    	}
		},		
		mounted(){
			let me = this;
			let ref = firebase.database().ref('dispositivos/cliente-1/rutinas');

			ref.on('value', function(snapshot) {
			  me.rutinas = snapshot.val();
			});
		},
		methods: {
			eliminarPre(index){
				this.eliminar_dialog = true;
				this.eliminarActual = index;
			},
			eliminarRutina(index){
				
				firebase.database().ref('dispositivos/cliente-1/rutinas').child(index).remove();
				this.eliminar_dialog = false;
			},
			actividad: function(index, activo){

				let rutina = {
					activo: !activo
				}

				firebase.database().ref('dispositivos/cliente-1/rutinas').child(index).update(rutina);
			},
			editarRutina: function(key){
				window.location.href = '/rutinas/' + key;
			},
			crearRutina: function(){
				let rutina = {
					nombre: this.rutina.nombre,
			    	descripcion: this.rutina.descripcion,
			    	activo: false,
			    	code: '',
			    	blocks_xml: ''
				}

				let myRef = firebase.database().ref('dispositivos/cliente-1/rutinas').push(rutina);
				let key = myRef.key;
				// alert(key);

				// this.$router.push('/rutinas/' + key);

				window.location.href = '/rutinas/' + key;
				// this.$emit('vista', 'rutinas')

			}
		}
	
	}
</script>

<style scoped>
</style>
<template>
	<span>
		<div id="blocklyDiv" style="height: 100%; width: 100%; position: relative;" ref="toolbox">	
		</div>
		
		<!-- <v-btn color="primary" dark @click="verCodigo()">ver codigo</v-btn> -->

		<!-- Recuerda que aun no sale el boton  -->



		<v-btn
			class="mt-5 mr-2"
	        fab
	        absolute
			right
			top
	        dark
	        color="primary"
	        @click="salir_dialog = true"
	      >
	        <v-icon>arrow_back</v-icon>
	      </v-btn>

	     <v-btn
			style="margin-left: 210px; margin-top: 50px;"
	        raised
	        absolute
	        left			
			top	        
	        color="white"
	        @click="editarrutina_dialog = true; nombreEdit = rutina.nombre ; descripcionEdit = rutina.descripcion"
	      >
	        Rutina: {{rutina.nombre}}
	      </v-btn>

		<v-speed-dial
			  v-model="menu"
              dark
              absolute
              top
              right
              
              transition="scale-transition"
            >
            <v-btn
			slot="activator"
	        color="primary"
	        dark
	        fab
	        
	        v-model="menu"
            >
              <v-icon>menu</v-icon>
              <v-icon>close</v-icon>
            </v-btn>            
		      <v-btn
		      	@click="rutina.activo ? guardar() : guardaryactivar_dialog = true"
		        fab
		        dark
		        small
		        color="primary"
		      >
		        <v-icon>save</v-icon>
		      </v-btn>
		      <v-btn
		        fab
		        dark
		        small
		        color="red"
		        @click="eliminar_dialog = true"
		      >
		        <v-icon>delete</v-icon>
		      </v-btn>
		      <v-btn
		        fab
		        dark
		        small
		        color="green accent-3"
		        @click="codigoenpantalla = true; codigoMostrar();"
		      >
		        <v-icon>code</v-icon>
		      </v-btn>
        </v-speed-dial>

		<v-snackbar
	        :timeout="2000"
	      	color="primary"
	      	v-model="snack_codigo_enviado">
			Código enviado 
			<v-btn dark flat @click.native="snack_codigo_enviado = false">Cerrar</v-btn>
    	</v-snackbar>

    	<v-snackbar
	        :timeout="2000"
	      	color="success"
	      	v-model="snack_guardado">
			Cambios guardados 
			<v-btn dark flat @click.native="snack_guardado = false">Cerrar</v-btn>
    	</v-snackbar>

    	<v-dialog v-model="editarrutina_dialog" max-width="500px">
	        <v-card>
	          	<v-card-title class="title">
	            	<div>Editar Rutina</div>
	            	<v-spacer></v-spacer>
	            	<v-btn icon @click.stop="editarrutina_dialog=false">
		          	<v-icon>close</v-icon>
		          	</v-btn>
	          	</v-card-title>
	          	<v-card-text>
		            <v-text-field
			            label="Nombre"
			            v-model="nombreEdit"
		            ></v-text-field>
		            <v-text-field
			            label="Breve descripción"
			            v-model="descripcionEdit"
		            ></v-text-field>
	          	</v-card-text>
	        <v-card-actions>
	        	
	        	<v-spacer></v-spacer>
	          	<v-btn color="primary" dark raised @click="actualizarRutina()">
	          	Actualizar
	          	</v-btn>
	        </v-card-actions>
	        </v-card>
	    </v-dialog>

	    <v-dialog v-model="salir_dialog" max-width="500px">
	        <v-card class="">
	          	<v-card-title class="title text-xs-center">
	            	¿Desea guardar sus cambios antes de salir?
	          	</v-card-title>
	          	<v-card-text>
		            
	          	</v-card-text>
	        <v-card-actions>
	        	<v-btn flat @click="salir_dialog = false">
	          	cancelar
	          	</v-btn>
	        	<v-spacer></v-spacer>
	        	<v-btn color="success" dark raised @click="guardar(); regresar()">
	          	si
	          	</v-btn>
	          	<v-btn color="error" dark raised @click="regresar()">
	          	no, salir sin guardar
	          	</v-btn>
	        </v-card-actions>
	        </v-card>
	    </v-dialog>

	    <v-dialog v-model="guardaryactivar_dialog" max-width="600px">
	        <v-card class="">
	          	<v-card-title class="title text-xs-center">
	            	¿Desea aprovechar y activar la rutina?
	          	</v-card-title>
	          	<v-card-text>
		            
	          	</v-card-text>
	        <v-card-actions>
	        	<v-btn flat @click="guardaryactivar_dialog = false">
	          	cancelar
	          	</v-btn>
	        	<v-spacer></v-spacer>
	        	<v-btn color="error" dark raised @click="guardar(); guardaryactivar_dialog = false;">
	          	no, solo guardar
	          	</v-btn>
	          	<v-btn color="success" dark raised @click="guardar(); activar(); guardaryactivar_dialog = false;">
	          	si, guardar y activar rutina
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
	          	<v-btn color="error" dark raised @click="eliminarRutina()">
	          	Si
	          	</v-btn>
	        </v-card-actions>
	        </v-card>
	    </v-dialog>

	    <v-dialog v-model="codigoenpantalla" max-width="500px">
	        <v-card>
	          	<v-card-title class="title">
	            	Codigo Previo
	          	</v-card-title>
	          	<v-card-text>
		            {{codigoPrevio}}
	          	</v-card-text>
	        <v-card-actions>
	        	<v-spacer></v-spacer>
	        	<v-btn color="primary" dark raised @click="codigoenpantalla = false">
	          	cerrar
	          	</v-btn>
	        </v-card-actions>
	        </v-card>
	    </v-dialog>

		<xml style="display: none;" ref="toolbox">
			<category name="LOGICA">
				<block type="controls_if"></block>
			    <block type="logic_compare"></block>
			    <block type="logic_operation"></block>
			    <block type="logic_negate"></block>
			    <block type="logic_boolean"></block>
			    <!-- <block type="logic_null"></block> -->
			    <!-- <block type="logic_ternary"></block> -->
			</category>
			<!-- <category name="TIEMPO">
				<block type="controls_repeat_ext">
			        <value name="TIMES">
			          <shadow type="math_number">
			            <field name="NUM">10</field>
			          </shadow>
			        </value>
			    </block>
			    <block type="controls_whileUntil"></block>
			    <block type="controls_for">
			        <value name="FROM">
			          <shadow type="math_number">
			            <field name="NUM">1</field>
			          </shadow>
			        </value>
			        <value name="TO">
			          <shadow type="math_number">
			            <field name="NUM">10</field>
			          </shadow>
			        </value>
			        <value name="BY">
			          <shadow type="math_number">
			            <field name="NUM">1</field>
			          </shadow>
			        </value>
			      </block> -->
			    <!-- <block type="controls_forEach"></block> -->
			    <!-- <block type="controls_flow_statements"></block> -->
			<!-- </category> -->
			<category name="NÚMEROS">
				<block type="math_number"></block>	
				<!-- <block type="math_arithmetic">
			        <value name="A">
			          <shadow type="math_number">
			            <field name="NUM">1</field>
			          </shadow>
			        </value>
			        <value name="B">
			          <shadow type="math_number">
			            <field name="NUM">1</field>
			          </shadow>
			        </value>
			    </block> -->
      			<!-- <block type="math_number_property">
			        <value name="NUMBER_TO_CHECK">
			          <shadow type="math_number">
			            <field name="NUM">0</field>
			          </shadow>
			        </value>
			    </block> -->
			    <block type="math_round">
			        <value name="NUM">
			          <shadow type="math_number">
			            <field name="NUM">3.1</field>
			          </shadow>
			        </value>
			    </block>  
			</category>
			<category name="TIEMPO">
				<block type="activador_tiempo"></block>
				<block type="timer_durante"></block>							
			</category>			
			<category name="SWITCHES">
				<block type="yinn_light_switch"></block>
				<block type="yinn_connect_switch"></block>				
			</category>
			<category name="SENSORES INTERNOS">
				<block type="yinn_sense_temp"></block>
				<block type="yinn_sense_lum"></block>
				<block type="yinn_sense_hum"></block>
				<block type="yinn_sense_mov"></block>			
			</category>
			<category name="SENSORES EXTERNOS">
				<block type="yinn_weather_temp"></block>
				<block type="yinn_weather_hum"></block>
				<block type="yinn_weather_lum"></block>
				<block type="yinn_weather_mov"></block>
				<block type="yinn_weather_lluv"></block>			
			</category>

			<category name="DEBUG" v-if="debug">
				<block type="text_print"></block>
				<block type="text"></block>	
			</category>
		</xml>
	</span>
</template>


<script>
import firebase from '~/utils/firebase/firebase.js';



	export default{
		props:{
			idrutina:{
				type: String,
				required: false,
				default: ''
			}
		},
		data () {
	    	return {
	    		codigoenpantalla: false,
	    		codigoPrevio: '',
	    		debug: true,
	    		eliminar_dialog: false,
	    		guardaryactivar_dialog: false,
	    		salir_dialog: false,
	    		snack_guardado: false,
	    		editarrutina_dialog: false,
	    		workspacePlayground: null,
	    		snack_codigo_enviado: false,
	    		menu: '',
	    		nombreEdit: '',
	    		descripcionEdit: '',
	    		key: '',
	    		rutina: {
			    	nombre: '',
			    	descripcion: '',
			    	activo: false,
			    	code: '',
			    	blocks_xml: ''
			    }
	    	}
	    },
	    head () {
			return {
				script: [
		      		{ type: 'text/javascript', src: '/scripts/blockly/blockly_compressed.js'},

		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/logic.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/loops.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/math.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/text.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/lists.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/colour.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/variables.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/generators/javascript/procedures.js'},

		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/logic.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/loops.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/math.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/text.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/lists.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/colour.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/variables.js'},
		      		{ type: 'text/javascript', src: '/scripts/blockly/blocks/procedures.js'},

		      		{ type: 'text/javascript', src: '/scripts/blockly/msg/js/es.js'},
		    	],
		    }
		},
		methods: {
			codigoMostrar(){
				Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      			this.codigoPrevio = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);
      			console.log(this.codigoPrevio)
			},
			eliminarRutina(){

				console.log(this.key);
				
				firebase.database().ref('dispositivos/cliente-1/rutinas').child(this.key).remove().then(function(){
					window.location.href = '/dashboard';
				});
			},
			guardar: function(){
				let me = this;

				let xml = Blockly.Xml.workspaceToDom(this.workspacePlayground);
				let xml_text = Blockly.Xml.domToText(xml);

				Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      			var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);

				let rutina = {
					blocks_xml: xml_text,
					code: code
				}

				firebase.database().ref('dispositivos/cliente-1/rutinas').child(this.idrutina).update(rutina).then(function(){
					me.snack_guardado = true;
				});
			},
			activar: function(){
				
				let rutina = {
					activo: true
				}

				firebase.database().ref('dispositivos/cliente-1/rutinas').child(this.idrutina).update(rutina).then(function(){
				});
			},
			regresar: function(){
				window.location.href = '/dashboard';
			},
			actualizarRutina: function(){
				let rutina = {
					nombre: this.nombreEdit,
			    	descripcion: this.descripcionEdit
				}

				firebase.database().ref('dispositivos/cliente-1/rutinas').child(this.idrutina).update(rutina);

				this.editarrutina_dialog = false;
			},
			verCodigo: function(){
				

				Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      			var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);

				//alert(code);
				
				let obj = {
					nuevo: true,
					activo: true,
					code: code.replace(/\n/g, ' ')
				}

				firebase.database().ref('dispositivos/cliente-1/rutinas').push(obj);

				this.snack_codigo_enviado = true;
			}
		},
		created(){

		},
		mounted(){
			// alert(this.idrutina);

			let me = this; 


			firebase.database().ref('dispositivos/cliente-1/rutinas').child(this.idrutina).on('value', function(snapshot) {
			  me.rutina = snapshot.val();
			});

			this.key = firebase.database().ref('dispositivos/cliente-1/rutinas').child(this.idrutina).key;

			//Aqui creamos el workspace

			me.workspacePlayground = Blockly.inject('blocklyDiv',{
  			toolbox: me.$refs.toolbox,
			grid:{
     			spacing: 20,
	        	length: 3,
	          	colour: '#ccc',
	          	snap: true
	        },
	        scrollbars: true,
	        trashcan: true,
	        });

	        

			setTimeout(function(){
				var xml = Blockly.Xml.textToDom(me.rutina.blocks_xml);
				Blockly.Xml.domToWorkspace(xml, me.workspacePlayground);
			},5000);
			
			

			

			// console.log('Si hay diagrama guardado');
			
			
			

			//Aqui mandamos llamar el codigo generado
			//var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);

		}
	}
</script>

<style scoped>
	
</style>
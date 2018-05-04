<template>
	<span>
		<div id="blocklyDiv" style="height: 90%; width: 100%; position: relative;" ref="toolbox">		
		</div>
		
		<v-btn color="primary" dark @click="verCodigo()">ver codigo</v-btn>

		<v-snackbar
	        :timeout="2000"
	      	color="primary"
	      	v-model="snack_codigo_enviado">
			Código enviado 
			<v-btn dark flat @click.native="snack_codigo_enviado = false">Cerrar</v-btn>
    	</v-snackbar>

		<xml style="display: none;" ref="toolbox">
			<!-- <category name="Control"> -->
				<!-- <block type="controls_repeat_ext"></block> -->
				<!-- <block type="math_arithmetic"></block> -->				
			<!-- </category> -->
			<category name="CONTROL">
				<block type="controls_if"></block>
			</category>
			<category name="LOGICA">
				<block type="controls_if"></block>
			    <block type="logic_compare"></block>
			    <block type="logic_operation"></block>
			    <block type="logic_negate"></block>
			    <block type="logic_boolean"></block>
			    <block type="logic_null"></block>
			    <block type="logic_ternary"></block>
			</category>
			<category name="TIEMPO">
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
			      </block>
			    <!-- <block type="controls_forEach"></block> -->
			    <!-- <block type="controls_flow_statements"></block> -->
			</category>
			<category name="TEXTO">
				<block type="text"></block>										
			</category>
			<category name="MATEMATICAS">
				<block type="math_number"></block>	
				<block type="math_arithmetic">
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
			    </block>
      			<block type="math_number_property">
			        <value name="NUMBER_TO_CHECK">
			          <shadow type="math_number">
			            <field name="NUM">0</field>
			          </shadow>
			        </value>
			    </block>
			    <block type="math_round">
			        <value name="NUM">
			          <shadow type="math_number">
			            <field name="NUM">3.1</field>
			          </shadow>
			        </value>
			    </block>  
			</category>
			<category name="DEBUG">
				<block type="text_print"></block>
			</category>
			<category name="SWITCHES">
				
			</category>
			<category name="SENSORES">
				
			</category>
		</xml>
	</span>
</template>

<script>
import firebase from '~/utils/firebase/firebase.js';



	export default{
		data () {
	    	return {
	    		workspacePlayground: null,
	    		snack_codigo_enviado: false
	    	}
	    },
		methods: {
			verCodigo: function(){
				this.snack_codigo_enviado = true;
				// Blockly.JavaScript.addReservedWords('code');
				var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);
				
				let obj = {
					nuevo: true,
					activo: true,
					code: 'console.log("Si funciona el envio de funciones");'
				}

				firebase.database().ref('dispositivos/cliente-1/rutinas').push(obj);
			}
		},
		mounted(){

			//Aqui creamos el workspace
			this.workspacePlayground = Blockly.inject('blocklyDiv',
      			{
      			toolbox: this.$refs.toolbox,
				grid:{
         			spacing: 20,
		        	length: 3,
		          	colour: '#ccc',
		          	snap: true},
		        scrollbars: true,
		        trashcan: true,
		             }				
      			);

			//Aqui mandamos llamar el codigo generado
			//var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);

		}
	}
</script>

<style scoped>
	
</style>
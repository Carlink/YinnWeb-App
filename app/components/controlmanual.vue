<template>
	<span class="grey lighten-2">
		<v-list subheader>
          <v-subheader class="grey lighten-2">ACTIVABLES</v-subheader>
          	<v-list-tile class="white" v-if="!activadores[0].visible && !activadores[1].visible && !debug">
          		Sin Dispositivos Activables Conectados
          	</v-list-tile>
            <span class="white" v-for="item in activadores" v-if="item.visible || debug">
				<v-divider></v-divider>
				
	            <v-list-tile class="white" avatar v-bind:key="item.title" @click="activadores_metodo(item)">
	              <v-list-tile-avatar class="mr-2">
	                <img :src="item.value ? item.icon : item.alt"/>
	              </v-list-tile-avatar>
	              <v-list-tile-content>
	                <v-list-tile-title>
	                {{item.dispositivo}}
	            	</v-list-tile-title>
	              </v-list-tile-content>
	              
				<v-spacer></v-spacer>

                <div :style="item.value ? 'color: #4CD06D;' : 'color: #D1501D;'">
                	{{item.value ? 'ACTIVO' : 'INACTIVO'}}	          
                </div>

	              
	            </v-list-tile>

	            
			</span>
			
			<v-subheader class="grey lighten-2">SENSORES INTERNOS</v-subheader>
			<v-list-tile v-if="!dispositivos_activos[0].activo && !debug">
				Sin Sensores Internos Conectados
			</v-list-tile>
			<span v-if="dispositivos_activos[0].activo || debug">
            
			
			<span v-for="item in sensores_internos">
				<v-divider></v-divider>

	            <v-list-tile avatar v-bind:key="item.title">
	              <v-list-tile-avatar class="mr-2">
	                <img :src="item.icon"/>
	              </v-list-tile-avatar>
	              <v-list-tile-content>
	                <span>{{item.title}}</span>
	              </v-list-tile-content>
	               <v-spacer></v-spacer>
	              <span>{{item.value}} {{item.unidad}}</span>
	            </v-list-tile>	            
			</span>

			</span>
			
			<v-subheader class="grey lighten-2" >SENSORES DE EXTERIOR</v-subheader>
			<v-list-tile v-if="!dispositivos_activos[1].activo && !debug">
				Sin Sensores de Exterior Conectados
			</v-list-tile>
			<span v-if="dispositivos_activos[1].activo || debug">
			
			<span v-for="item in sensores_externos" >
				<v-divider></v-divider>

	            <v-list-tile avatar v-bind:key="item.title">
	              <v-list-tile-avatar class="mr-2">
	                <img :src="item.icon"/>
	              </v-list-tile-avatar>
	              <v-list-tile-content>
	                <span>{{item.title}}</span>
	              </v-list-tile-content>
	              <v-spacer></v-spacer>
	              <span>{{item.value}} {{item.unidad}}</span>
	            </v-list-tile>	            
			</span>
			</span>

            
        </v-list>
	</span>
</template>

<script>
import firebase from '~/utils/firebase/firebase.js';

	export default {
    data () {
	    return {
	      debug: false,
	      activadores: [
	        { title: 'Bombilla', dispositivo: 'Lámpara', icon: 'iconos/dispositivos/bombillo_on.svg', alt: 'iconos/dispositivos/bombillo_off.svg' , value: null, visible: false},
	        { title: 'Ventilador', dispositivo: 'Switch', icon: 'iconos/dispositivos/switch_on.svg', alt: 'iconos/dispositivos/switch_off.svg' , value: null, visible: false}
	      ],
	      sensores_internos: [	        
	        { title: 'Temperatura', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/temperatura_interna.svg' , value: null, unidad: ' °C'},
	        { title: 'Humedad', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/humedad.svg' , value: null, unidad: '%'},
	        { title: 'Luminicidad', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/luminisidad.svg' , value: null, unidad: 'lm'},
	        { title: 'Movimiento', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/movimiento.svg' , value: null, unidad: ''}
	        
	      ],
	      sensores_externos: [
	        { title: 'Temperatura', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/temperatura_interna.svg' , value: null, unidad: ' °C'},
	        { title: 'Humedad', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/humedad.svg' , value: null, unidad: '%'},
	        { title: 'Luminocidad', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/luminisidad.svg' , value: null, unidad: ' lm'},
	        { title: 'Movimiento', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/movimiento.svg' , value: null},
	        { title: 'Lluvia', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/lluvia.svg' , value: null},
	      ],
	      dispositivos_activos: [
	      	{ dispositivo: 'Yinn Sense', activo: false},
	      	{ dispositivo: 'Yinn Weather', activo: false},
	      ]
	    }
	  },
	  mounted(){
	  	let me = this;

	  	firebase.database().ref('dispositivos/cliente-1/actuadores').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.activadores[0].value = c.bombilla;
	  		me.activadores[1].value = c.ventilador;
	  		
	  	});

	  	firebase.database().ref('dispositivos/cliente-1/sensores_internos').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.sensores_internos[0].value = c.temperatura;
	  		me.sensores_internos[1].value = c.humedad;
	  		me.sensores_internos[2].value = c.luminosidad;
	  		me.sensores_internos[3].value = (c.movimiento == 0 ? 'Sin movimiento' : 'Hay movimiento!!');
	  	});

	  	firebase.database().ref('dispositivos/cliente-1/sensores_externos').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.sensores_externos[0].value = c.temperatura;
	  		me.sensores_externos[1].value = c.humedad;
	  		me.sensores_externos[2].value = c.luminosidad;
	  		me.sensores_externos[3].value = (c.movimiento == 0 ? 'Sin movimiento' : 'Hay movimiento!!');
	  		me.sensores_externos[4].value = c.lluvia;
	  	});

	  	firebase.database().ref('dispositivos/cliente-1/dispositivos_activos').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.activadores[0].visible = c.YinnLight;
	  		me.activadores[1].visible = c.YinnConnect;
	  		
	  		me.dispositivos_activos[0].activo = c.YinnSense;
	  		me.dispositivos_activos[1].activo = c.YinnWeather;
	  	});

	  },
	  methods:{
	  	activadores_metodo: function(item){
	  		firebase.database().ref('dispositivos/cliente-1/actuadores').child(item.title.toLowerCase()).set(!item.value);
	  	},
	  }
	}
</script>

<style scoped>
	
</style>
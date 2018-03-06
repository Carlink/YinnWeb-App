<template>
	<span>
		<v-list subheader>
          <v-subheader class="grey lighten-2">ACTIVABLES</v-subheader>
            <span v-for="item in activadores">
				<v-divider></v-divider>
				
	            <v-list-tile avatar v-bind:key="item.title" @click="activadores_metodo(item)">
	              <v-list-tile-avatar class="mr-2">
	                <img :src="item.value ? item.icon : item.alt"/>
	              </v-list-tile-avatar>
	              <v-list-tile-content>
	                <v-list-tile-title>
	                {{item.title}}
	            	</v-list-tile-title>
	              </v-list-tile-content>
	              
				<v-spacer></v-spacer>

                <div :style="item.value ? 'color: #4CD06D;' : 'color: #D1501D;'">
                	{{item.value ? 'ACTIVO' : 'INACTIVO'}}	          
                </div>

	              
	            </v-list-tile>

	            
			</span>

            <v-subheader class="grey lighten-2">SENSORES INTERNOS</v-subheader>
			
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

			<v-subheader class="grey lighten-2">SENSORES EXTERNOS</v-subheader>
			
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

            
        </v-list>
	</span>
</template>

<script>
import firebase from '~/utils/firebase/firebase.js';

	export default {
    data () {
	    return {
	      activadores: [
	        { title: 'Ventilador', dispositivo: 'Yinn Connect', icon: 'iconos/dispositivos/ventilador_on.svg', alt: 'iconos/dispositivos/ventilador_off.svg' , value: null},
	        { title: 'Bombilla', dispositivo: 'Yinn Light', icon: 'iconos/dispositivos/bombillo_on.svg', alt: 'iconos/dispositivos/bombillo_off.svg' , value: null}
	      ],
	      sensores_internos: [	        
	        { title: 'Temperatura', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/temperatura_interna.svg' , value: null, unidad: ' °C'},
	        { title: 'Luminicidad', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/luminisidad.svg' , value: null, unidad: 'lm'},
	        { title: 'Movimiento', dispositivo: 'Yinn Sense', icon: 'iconos/dispositivos/bombillo.svg' , value: null, unidad: ''},
	      ],
	      sensores_externos: [
	        { title: 'Temperatura Externa', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/temperatura_externa.svg' , value: null, unidad: ' °C'},
	        { title: 'Luminocidad Externa', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/luminisidad.svg' , value: null, unidad: ' lm'},
	        { title: 'Movimiento', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/bombillo.svg' , value: null},
	        { title: 'Lluvia', dispositivo: 'Yinn Weather', icon: 'iconos/dispositivos/lluvia.svg' , value: null},
	      ]
	    }
	  },
	  mounted(){
	  	let me = this;

	  	firebase.database().ref('dispositivos/cliente-1/actuadores').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.activadores[0].value = c.ventilador;
	  		me.activadores[1].value = c.bombilla;
	  	});

	  	firebase.database().ref('dispositivos/cliente-1/sensores_internos').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.sensores_internos[0].value = c.temperatura;
	  		me.sensores_internos[1].value = c.luminosidad;
	  		me.sensores_internos[2].value = c.movimiento;
	  	});

	  	firebase.database().ref('dispositivos/cliente-1/sensores_externos').on('value', (snapshot)=>{
	  		let c = snapshot.exportVal();
	  		me.sensores_externos[0].value = c.temperatura;
	  		me.sensores_externos[1].value = c.luminosidad;
	  		me.sensores_externos[2].value = c.movimiento;
	  		me.sensores_externos[3].value = c.lluvia;
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
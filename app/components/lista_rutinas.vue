<template>
	<span>
		<v-list two-line>
          <template v-for="item in rutinas">
            <v-divider></v-divider>
            <v-list-tile avatar v-bind:key="item.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.activo ? '/img/green.svg' : '/img/red.svg'">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.nombre"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.descripcion"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>		
	</span>
</template>

<script>
	import firebase from '~/utils/firebase/firebase.js';

	export default {
	    data () {
		    return {
		    	rutinas: {},
		    	}
		},		
		mounted(){
			let me = this;
			let ref = firebase.database().ref('dispositivos/cliente-1/rutinas');

			ref.on('value', function(snapshot) {
			  me.rutinas = snapshot.val();
			});
		},
		methods:{

		}
	
	}
</script>

<style scoped>
</style>
<template>
	<span>
		<v-layout column>
			<v-layout justify-center
				style="height: 18vh;">
      			<img src="/img/Yinn.svg" id="logo">
      		</v-layout>

      		<manual
      			v-show="vista=='dashboard'"
				style="overflow: scroll; height: 72vh;"
      		></manual>
      		<!-- <rutinas
      			v-show="vista=='directions'"
				style="overflow: scroll; height: 72vh;"
      		></rutinas> -->
      		<lista
      			v-show="vista=='directions'"
				style="height: 72vh;"
			>      			
      		</lista>
      		<dispositivos
      			v-show="vista=='devices'"
				style="overflow: scroll; height: 72vh;"
      		></dispositivos>
      		

			<v-bottom-nav absolute :shift="true" :value="true" :active.sync="vista" color="transparent">
		      <v-btn flat color="amber" value="dashboard">
		        <span>DASHBOARD</span>
		        <v-icon>dashboard</v-icon>
		      </v-btn>
		      <v-btn flat color="amber" value="directions">
		        <span>RUTINAS</span>
		        <v-icon>directions</v-icon>
		      </v-btn>
		      <v-btn flat color="amber" value="devices">
		        <span>DISPOSITIVOS</span>
		        <v-icon>device_hub</v-icon>
		      </v-btn>
		      <!-- <v-btn flat color="amber" value="seetings">
		        <span>AJUSTES</span>
		        <v-icon>settings</v-icon>
		      </v-btn> -->
		    </v-bottom-nav>
		</v-layout>
	</span>
</template>

<script>
	import manual from '~/components/controlmanual.vue';
	import rutinas from '~/components/rutinas.vue';
	import dispositivos from '~/components/dispositivos.vue';
	import lista from '~/components/lista_rutinas.vue';

	export default{
		layout: 'yinn',
		components: {
			manual,
			rutinas,
			dispositivos,
			lista
		},
		data () {
	      return {
	        vista: 'directions'
	      }
	    }
	};	
</script>

<style scoped>
	#logo{
		width: 100px;
	}
</style>
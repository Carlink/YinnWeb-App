q<template>
	<span>
		<v-layout column>
			<v-layout justify-center
				style="height: 18vh;">
      			<img src="/img/Yinn.svg" id="logo">
      		</v-layout>

      		<manual
			style="overflow: scroll; height: 72vh;"
      		></manual>

			<v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
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
		      <v-btn flat color="amber" value="seetings">
		        <span>AJUSTES</span>
		        <v-icon>settings</v-icon>
		      </v-btn>
		    </v-bottom-nav>
		</v-layout>
	</span>
</template>

<script>
	import manual from '~/components/controlmanual.vue';

	export default{
		layout: 'yinn',
		components: {
			manual
		},
		data () {
	      return {
	        e1: 'recent'
	      }
	    }
	};	
</script>

<style scoped>
	#logo{
		width: 100px;
	}
</style>
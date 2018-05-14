<template>
	<span>	
      		<rutinas
      			:idrutina="url"
				style="height: 100vh;"
      		></rutinas>
	</span>
</template>

<script>
	import rutinas from '~/components/rutinas.vue';
	import firebase from '~/utils/firebase/firebase.js';

	export default{
		layout: 'yinn',
		components: {
			rutinas
		},
		data () {
	      return {
	      	url: ''
	      }
	    },
	    methods: {
	    },
	    created (){
	    	this.url = this.$route.path.split('/')[2]
	    }
	};	
</script>

<style scoped>
</style>
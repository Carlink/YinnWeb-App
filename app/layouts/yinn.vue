<template>
	<v-app style="background: #373737;">
		<v-layout style="width: 100%;" fluid full-height justify-center>
			<v-flex x12 style="text-align: center;">
				<nuxt></nuxt>
			</v-flex>
		</v-layout>
	</v-app>	
</template>

<script>

	import firebase from '~/utils/firebase/firebase.js';

	export default {
		components: {
		},
	};	

</script>
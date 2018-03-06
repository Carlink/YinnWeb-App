<template>
	<v-container fill-height id="body">
        <v-layout row wrap align-center>
          	<v-flex class="text-xs-center">
           		<img src="/img/Yinn.svg" id="logo" class="elem">
          	</v-flex>
          	<v-flex xs12 class="text-xs-center white pl-3 pr-3 pt-3 pb-3 mt-3" style="border-radius: 7px;">
	          	<v-layout fluid column>
	          		<v-flex>
	          			<v-text-field
							v-model="user"
				            name="user"
				            label="Correo electrónico"
				            id="userId"
				            :rules="[rules.required, rules.email]"
				            hint="Por ejemplo, correo@ejemplo.com"
				            color="yellow accent-4"
				            autofocus
				            type="email"
			            ></v-text-field>
	          		</v-flex>
	          		<v-flex>
	          			<v-text-field
							v-model="pass"
				            name="pass"
				            label="Contraseña"
				            id="passId"
				            :rules="[rules.required]"
				            hint="Mínimo 6 digitos"
				            color="yellow accent-4"
				            :append-icon="e1 ? 'visibility' : 'visibility_off'"
							append-icon-cb="() => (e1 = !e1)"
							:type="e1 ? 'text' : 'password'"
			            ></v-text-field>

	          		</v-flex>
	          	</v-layout>
          	</v-flex>
          	<v-flex text-xs-center fill-width>
          			<v-layout>
          				<v-flex>
          					<v-btn color="primary" href="/login" small flat class="pa-0">Ya tengo cuenta</v-btn>
          				</v-flex>
          				
						
	          			
	        	          			
          			</v-layout>
          	</v-flex>
          	<v-flex text-xs-center fill-width>
          			<v-btn raised @click.prevent='register' class="primary white--text pl-4 pr-4">Registrarme</v-btn>
          	</v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from '~/utils/firebase/firebase.js';
	export default {
		data () {
      		return {
      			e1: false,
      			user: '',
      			pass: '',
		        title: 'Preliminary report',
		        email: '',
		        rules: {
		          required: (value) => !!value || 'Requerido.',
		          email: (value) => {
		            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		            return pattern.test(value) || 'e-mail invalido.'
			        }
			    }
			}
	    },
		layout: 'yinn',
		components: {
		},
		mounted(){
			//descomentar para:
			
			// Inicar pagina como registro
			// window.location.replace("/inicio");
			//Inicar pagina final
		},
		methods: {
			register(){
				firebase.auth().createUserWithEmailAndPassword(this.user, this.pass).then(function(user) {
				    var user = firebase.auth().currentUser;
				    logUser(user);
				    firebase.auth().currentUser.sendEmailVerification().then(function() {
				        // Email Verification sent!
				        // [START_EXCLUDE]
				        //alert('Email de verificación enviado!');
				        // [END_EXCLUDE]
				    });
				    // // Optional
				}, function(error) {
				    // Handle Errors here.
				    var errorCode = error.code;
				    var errorMessage = error.message;

				 //    switch(error.code){
					// 	case 'auth/email-already-in-use':
					// 		alert('El correo ya esta registrado.');
					// 		break;
					// 	case 'auth/invalid-email':
					// 		alert('Correo electrónico invalido.');
					// 		break;
					// 	case 'auth/operation-not-allowed':
					// 		alert('Usuario deshabilitado por favor ponte en contacto con nosotros.');
					// 		break;
					// 	case 'auth/weak-password':
					// 		alert('Password débil');
					// 		break;
					// }
				});
			
			
			}
		},
	};
</script>
<style scoped>
	#body{
		background: #373737;      
	}
	#logo{
		width: 50%;
	}
</style>
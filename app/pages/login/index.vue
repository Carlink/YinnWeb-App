<template>
        <span column>

			<v-layout column class="pl-4 pr-4 mt-5">

          		<v-layout justify-center>
          			<img src="/img/Yinn.svg" id="logo">
          		</v-layout>
		       	

		      	<v-card class="pl-3 pr-3 pt-2 pb-3">          		
		  			<v-text-field
						v-model="user"
			            name="user"
			            label="Usuario"
			            :rules="[rules.required, rules.email]"
			            hint="Por ejemplo, correo@ejemplo.com"
			            color="yellow accent-4"
			            autofocus
			            type="email"
		            ></v-text-field> 
		  			<v-text-field
						v-model="pass"
			            name="pass"
			            label="Contraseña"
			            :rules="[rules.required]"
			            hint="Ingresa tu contraseña"
			            color="yellow accent-4"
			            :append-icon="e1 ? 'visibility' : 'visibility_off'"
						:append-icon-cb="() => {return (e1 = !e1)}"
						:type="e1 ? 'text' : 'password'"
		            ></v-text-field>         	
		      	</v-card>

				              			
				<v-btn class="mt-3 primary" block raised dark @click.prevent='login'>Iniciar Sesión</v-btn>

				<v-btn class="mt-3" color="primary" href="/registro" flat>Crear cuenta</v-btn>

				<v-btn class="mt-3" color="amber lighten-2" href="/dashboard" flat>Saltar e ir directo a controles</v-btn>



          	</v-layout>
        </span>
</template>

<script>
import firebase from '~/utils/firebase/firebase.js';
	export default {
		layout: 'yinn',
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
		
		components: {
		},
		mounted(){
			//descomentar para:
			
			// Inicar pagina como registro
			// window.location.replace("/inicio");
			//Inicar pagina final
		},
		methods: {
			login(){
					firebase.auth().signInWithEmailAndPassword(this.user,this.pass)
						.then(function (user) {
							console.log('login con exito');
						}).catch(function (error) {

							switch(error.code){
								case 'auth/invalid-email':
									alert('Correo erroneo');
									break;
								case 'auth/user-disabled':
									alert('Usuario deshabilitado por favor ponte en contacto con nosotros.');
									break;
								case 'auth/user-not-found':
									alert('Usuario no encontrado');
									break;
								case 'auth/wrong-password':
									alert('Contraseña erronea');
									break;
							}
						});
			},
		},
	};
</script>
<style scoped>
	#logo{
		width: 190px;
	}
</style>
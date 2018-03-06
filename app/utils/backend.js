/*
	MODO DE USO
	---------------

 	import end from '~/utils/backend.js'

 	mounted(){
 		...
 		end(localStorage); // inicialización va dentro de mounted
		...
	}
 */

// import axios from 'axios';
// const dev = false;
// const host = dev? 'http://localhost:5002/proyecto-morelos/us-central1/' : 'https://us-central1-proyecto-morelos.cloudfunctions.net/';
// let token;


// function consultar (localStorage) {
// 	token = localStorage.getItem('idToken');
// }
// consultar.validar = {};
// consultar.validar.pendientesnum = function () {
// 	return axios.get(host + 'validar/pendientes_num', {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.validar.pendientes = function (obj) {
// 	return axios.get(host + 'validar/pendientes/' + obj, {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.validar.nuevo = function (obj, nuevo) {
// 	return axios.post(host + 'validar/agregar/' + obj, nuevo, {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.validar.actualizar = function (obj, uid, objActualizado) {
// 	return axios.post(host + 'validar/actualizar/' + obj + '/' + uid , objActualizado, {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.validar.aceptar = function (obj, uid) {
// 	return axios.get(host + 'validar/aceptar/' + obj + '/' + uid , {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.validar.rechazar = function (obj, uid) {
// 	return axios.get(host + 'validar/rechazar/' + obj + '/' + uid , {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.validar.similares = function (obj, busqueda) {
// 	return axios.get(host + 'validar/similares/' + obj + '/' + busqueda, {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };
// consultar.auth = {};
// consultar.auth.isAdmin = function () {
// 	return axios.get(host + 'auth/isAdmin', {
// 		headers: {
// 			'authorization': 'Bearer ' + token
// 		}
// 	});
// };

//export default consultar;

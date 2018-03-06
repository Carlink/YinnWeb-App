var cupon = require('./cupon.js');
var archivoHTML = 'plantilla.html';
var cuponDatos = {
	id: 'sahdgasjds',
	fechas: [
		'46382376423',
		'724398472384783'
	],
	descuentos: [
		'dsakdaskdjask',
		'wdasjdsdjasdj'
	],
	productos: [
		'hjgfjdfgjhgs',
		'dashgdsahdgjasdgaj',
		'sadgjasgdhjsgdhdagsagdh'
	],
	codigoEsQr: true,
	codigo: 'http://www.google.com'
};
var direccion = '';
cupon.creaCupon(archivoHTML,cuponDatos,direccion);
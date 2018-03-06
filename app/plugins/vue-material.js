/**
 * Created by davo on 7/26/17.
 */
import Vue from 'vue';

if (process.browser) {
	const VueMaterial = require('vue-material');
	Vue.use(VueMaterial);
	Vue.material.registerTheme({
		'gray': {
			'primary': {
				'color': 'blue-grey',
				'hue': 900
			},
			'background': {
				'color': 'grey',
				'hue': 900
			}
		},
		'boton': {
			'primary': 'white',
			'accent': {
				'color': 'red',
				'hue': 'A700'
			},
			'background': {
				'color': 'blue-grey',
				'hue': 900
			}
		},
		'facebook-button': {
			'primary': {
				'color':  'indigo',
				'hue': 600,
				'textColor': 'white'
			}
		},
		'login-button': {
			'primary': {
				'color':  'blue',
				'hue': 'A200',
				'textColor': 'white'
			}
		}
	});
}

import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBdvJNvsnkt0RpATNoob210uON_Lphc4Ro',
		//libraries: 'places' // Only if you need Autocomplete
	}
});
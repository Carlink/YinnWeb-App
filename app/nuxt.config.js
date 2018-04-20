module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Yinn App',
		titleTemplate: '%s - Yinn',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Yinn App'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,500,700,400italic'},
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
			{rel: 'stylesheet', href: '	https://cdnjs.cloudflare.com/ajax/libs/vuetify/0.17.7/vuetify.min.css', type: 'text/css'},
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.min.css',
				type: 'text/css'
			}
		],
		script: [
			{src: '//code.jquery.com/jquery-latest.min.js', type: 'text/javascript'},
			{src: '/scripts/FlowType.JS-master/flowtype.js', type: 'text/javascript'},
			{src: '/scripts/blockly_compressed.js', type: 'text/javascript'},
			{src: '/scripts/javascript_compressed.js', type: 'text/javascript'},
			{src: '/scripts/blocks_compressed.js', type: 'text/javascript'},
			{src: '/scripts/msg/js/es.js', type: 'text/javascript'},						
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.min.js',
				type: 'text/javascript'
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	

	plugins: [
		'~/plugins/vuetify',
		'~/plugins/vue-js-modal',
		'~/plugins/vue-multiselect',
		'~/plugins/googleMaps',
	],
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLINT on save
		 */
		// extend (config, ctx) {
		// if (ctx.isClient) {
		// 	config.module.rules.push({
		// 		enforce: 'pre',
		// 		test: /\.(js|vue)$/,
		// 		loader: 'eslint-loader',
		// 		exclude: /(node_modules)/
		// 	});
		// }
		// },
		extend (config, ctx) {
			config.module.rules.push({
				test: /.js$/,
				loader: 'babel-loader',
				exclude: function (modulePath) {
					return /node_modules/.test(modulePath) &&
						/node_modules\/vue2-google-maps/.test(modulePath) == false;
				},
				options: Object.assign({}, this.babelOptions)
			})
		},
		babel: {
			plugins: [
				'babel-plugin-transform-class-properties',
				'babel-plugin-syntax-flow',
				'babel-plugin-transform-flow-strip-types'
			],

		}

	},

	css: [
		'~/static/styles/vue-multiselect.min.css',
		'~/css/main.css'
	],

	router: {
		middleware: 'https'
	}
};

import colors from 'vuetify/es5/util/colors';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	server: {
		port: 3005,
	},
	head: {
		titleTemplate: '%s | BBC de León trucking',
		title: 'BBC de León trucking',
		htmlAttrs: {
			lang: 'es',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Diseño, construcción, instalación y equipamiento de albercas, jacuzzis y spas en Guadalajara, Tepatitlan y los altos de jalisco.',
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'construcción de albercas, construcción de piscinas, bombas de calor para albercas, calentadores solares para albercas, mantenimiento de albercas, mosaico veneciano, automatización de albercas, cascadas artificiales, filtrado de albercas, iluminación led para albercas, instalación de jacuzzi, construcción de chapoteaderos',
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication-TileColor', content: '#000000' },
			{ name: 'theme-color', content: '#000000' },
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'BBC de León trucking',
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'BBC de León trucking',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{ rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
		],
		script: [],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/scss/main.scss',
		'vue-slick-carousel/dist/vue-slick-carousel.css',
		'animate.css/animate.min.css',
	],
	env: {
		FACEBOOK: 'https://www.facebook.com/Albercas-Pool-In-106727282170988',
		INSTAGRAM: 'https://www.instagram.com/poolin.albercas/?hl=es-la',
		VUE_APP_ENDPOINT: 'https://apipoolin.lava.mx',
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '@plugins/slick-slide.js', mode: 'client' },
		{ src: '~/plugins/vee-validate' },
		{ src: '~/plugins/sweet-modal', mode: 'client' },
		{ src: '~/plugins/vue-wow' },
		{ src: '~/plugins/vue-picture-swipe', ssr: false },
		{ src: '@/plugins/recaptcha.js', mode: 'client', ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
	styleResources: {
		scss: ['./assets/scss/*.scss'],
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		treeShake: true,
		icons: {
			iconfont: 'mdi', // default - only for display purposes
		},

		breakpoint: {
			mobileBreakpoint: 'md',
			thresholds: {
				xs: 480,
				sm: 864,
				md: 1264,
				lg: 1440,
			},
			scrollBarWidth: 0,
		},
		theme: {
			dark: false,
			themes: {
				dark: {},
				light: {
					primary: '#4AA65A',
					black: '#000',
					white: '#fff',
					secondary: '#2d2d2d',
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vee-validate/dist/rules'],
		extend(config, ctx) {},
	},
	axios: {
		baseURL: process.env.VUE_APP_ENDPOINT,
	},
};

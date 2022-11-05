<template>
	<v-app dark>
		<v-row class="justify-center align-center">
			<v-col cols="8" sm="auto" class="d-flex justify-center flex-column">
				<v-card class="" tile flat>
					<!-- <img
						src="../assets/imgs/iconos/error.svg"
						alt="error-404"
					/> -->
					<h1 class="my-8" v-if="error.statusCode === 404">
						Página <span>no encontrada</span>
					</h1>
					<h1 v-else>
						{{ otherError }}
					</h1>
				</v-card>
				<v-btn @click="goBack" class="mt-4" depressed> Regresar </v-btn>
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			pageNotFound: '404 página no encontrada',
			otherError: 'An error occurred',
		};
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title,
		};
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
	},
};
</script>

<style lang="scss" scoped>
h1 {
	color: #0d3b7c;
	font-size: 30px;
	line-height: 36px;
	text-transform: uppercase;
	font-weight: 400;
	span {
		font-weight: 800;
	}
}

img {
	display: block;
	margin: 0 auto;
	height: 100px;
	width: 100px;
}

.empty {
	height: 20vh;
}

button {
	//   max-width: 618px;
	max-width: 618px !important;
	width: 100% !important;
	height: 35px !important;
	font-size: 14px !important;
	border: 3px solid #0d3b7c !important;
	color: #0d3b7c !important;
	font-style: italic !important;
	font-weight: 400 !important;
	line-height: 11px !important;
	background-color: transparent !important;
	border-radius: 0 !important;
}

@media screen and (min-width: $sm) {
	button {
		// width: 267px !important;
		height: 60px !important;
		font-size: 17px !important;
	}

	h1 {
		font-size: 37px;
		line-height: 42px;
		span {
			font-size: 37px;
		}
	}
}
</style>

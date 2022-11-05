<template>
	<section class="">
		<v-row class="" no-gutters>
			<v-col cols="12" md="8" lg="6" class="pa-md-0 box-content">
				<v-row
					class="justify-center align-center fill-height text-center"
				>
					<v-col cols="12" class="fill-height pa-4 pa-md-8">
						<div class="card-about fill-height pa-2">
							<div
								class="content fill-height d-flex align-center"
							>
								<div class="content-text">
									<h2>
										<s>02 </s>
										<span class="">/</span> Nosotros
									</h2>

									<p class="my-8 my-md-10">
										Somos una empresa mexicana de
										autotransporte terrestre que ofrece
										soluciones logísticas contando con más
										10 años de experiencia en las industrias
										más demandantes, operando con
										infraestructura tecnológica y de
										vanguardia poniendo a disposición el
										transporte a la medida de tu negocio.
									</p>
									<p>
										Ofrecemos unidades de transporte de la
										mejor calidad, operadores calificados,
										atención personalizada y monitoreo 24/7.
									</p>
									<div
										class="
											justify-lg-center
											flex-md-row
											mt-10 mt-md-16
											d-flex
											flex-column
											align-center
										"
									>
										<v-btn
											class="mb-4 mb-lg-0 mr-lg-4 oulined"
											depressed
											color="primary"
											text
											rounded
											outlined
											:to="{ name: 'nosotros' }"
											>Conóce más</v-btn
										>
										<v-btn
											depressed
											color="primary"
											rounded
											:to="{ name: 'contacto' }"
											>Contáctanos</v-btn
										>
									</div>
								</div>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-col>
			<!-- <v-col cols="12" md="6" class="pa-0 box-content order-1 order-sm-0">
				<img
					:src="require(`../assets/imgs/home/banner2.jpg`)"
					alt="banner2"
				/>
			</v-col> -->
		</v-row>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
	background-image: url('../assets/imgs/home/banner2.jpg');
	background-repeat: no-repeat;
	background-size: cover;
}

.box-content {
	height: 599px;
	// background-color: yellow;
	background: rgba(217, 217, 217, 0.59);
}

.card-about {
	background: #ffffff;
	// max-width: 776px;
}
.content-text {
	max-width: 588px;
	margin: 0 auto;
}

h2 {
	font-size: 25px;
	line-height: 138.69%;

	/* identical to box height, or 49px */
	letter-spacing: 0.025em;
	text-transform: uppercase;
	text-align: center;

	color: $black;
	font-weight: 200;
	s {
		color: rgba(74, 166, 90, 0.39);
		font-weight: 900;
	}
	span {
		color: $primary;
		// background: $primary;
		font-weight: 900;
	}
}

p {
	font-weight: 300;
	font-size: 12px;
	line-height: 174.69%;

	/* or 31px */
	text-align: center;
	letter-spacing: 0.025em;

	color: #000000;
}

a {
	// background: #4aa65a !important;
	border-radius: 47px !important;
	width: 234px !important;
	height: 47px !important;
	text-transform: initial !important;
	font-weight: 700 !important;
	font-size: 12px !important;
	line-height: 22px !important;
	letter-spacing: 0.025em !important;
}
a.oulined {
	border: 2px solid #5b5b5b !important;
}
@media screen and (min-width: $sm) {
	h2 {
		font-size: 35px;
	}
	p {
		font-size: 18px;
	}
	a {
		height: 58px !important;
		font-size: 19px !important;
	}

	.box-content {
		height: 881px;
	}
}
</style>

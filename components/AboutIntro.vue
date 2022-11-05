<template>
	<div class="banner">
		<img
			:src="require(`../assets/imgs/contacto/banner.png`)"
			alt="banner"
			class="grey lighten-3"
		/>
		<div class="overline d-flex justify-center">
			<div class="content fill-height d-flex align-center justify-center">
				<v-row class="justify-center">
					<v-col cols="12" lg="10" xl="9">
						<v-row class="align-center text-center" no-gutters>
							<v-col cols="12" class="mb-8">
								<h2>sobre <span>nosotros</span></h2>
							</v-col>
							<v-col cols="12">
								<p>
									Somos una empresa mexicana de autotransporte
									terrestre que ofrece soluciones logísticas
									contando con más 10 años de experiencia en
									las industrias más demandantes, operando con
									infraestructura tecnológica y de vanguardia
									poniendo a disposición el transporte a la
									medida de tu negocio.
								</p>
								<p class="mt-16 mt-md-8">
									Ofrecemos unidades de transporte de la mejor
									calidad, operadores calificados, atención
									personalizada y monitoreo 24/7.
								</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
	height: 800px;

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	background-color: $gray;
}

.overline {
	height: 100%;
	width: 100%;
	// opacity: 0.6188227;
	// background: rgba(13, 59, 124, 0.61);
	position: absolute;
}

img {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.banner-box {
	position: absolute;
}
h2 {
	color: $white;
	text-transform: uppercase;
	font-weight: 200;
	font-size: 20px;
	line-height: 138.69%;
	text-align: center;
	letter-spacing: 0.025em;
	span {
		font-weight: 700;
	}
}

p {
	font-weight: 300;
	font-size: 18px;
	text-align: center;
	text-transform: initial;

	line-height: 27px;
	color: #ffffff;
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 35px;
	}

	p {
		font-size: 23px;
	}
}
@media screen and (min-width: $md) {
	.banner {
		height: 500px;
	}
}
</style>

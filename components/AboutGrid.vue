<template>
	<div class="">
		<v-row class="" no-gutters tag="section">
			<v-col cols="12" sm="12" md="6" class="pa-md-0 box-content">
				<div class="content fill-height">
					<v-row
						class="
							justify-center
							align-center
							fill-height
							text-center
						"
					>
						<v-col cols="12">
							<div class="content-text mx-auto">
								<h2 class="mb-8">
									Nuestra <span>Misión</span>
								</h2>

								<p class="">
									Somos una empresa de transporte apasionada
									por la logística, especializada en generar
									soluciones a cada uno de nuestros clientes,
									con el objetivo de fortalecer la relación
									comercial y crear relaciones duraderas;
									garantizando crecimiento, excelencia,
									precisión, y la satisfacción de recibir el
									servicio deseado.
								</p>
							</div>
						</v-col>
					</v-row>
				</div>
			</v-col>
			<v-col
				cols="12"
				sm="12"
				md="6"
				class="pa-0 box-content order-1 order-sm-0"
			>
				<img
					:src="require(`../assets/imgs/nosotros/img1.jpg`)"
					alt=""
				/>
			</v-col>
		</v-row>
		<v-row class="" no-gutters tag="section">
			<v-col
				cols="12"
				sm="12"
				md="6"
				class="pa-0 box-content order-1 order-md-0"
			>
				<img
					:src="require(`../assets/imgs/nosotros/img2.jpg`)"
					alt=""
				/>
			</v-col>
			<v-col cols="12" sm="12" md="6" class="pa-md-0 box-content order-0">
				<div class="content fill-height">
					<v-row
						class="
							justify-center
							align-center
							fill-height
							text-center
						"
					>
						<v-col cols="12" class="">
							<div class="content-text mx-auto">
								<h2 class="mb-8">
									Nuestra <span>visión</span>
								</h2>

								<p class="">
									Ser reconocidos dentro de las mejores
									empresas logísticas a nivel nacional
								</p>
							</div>
						</v-col>
					</v-row>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img-box {
	width: 100%;
}
img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
.box-content {
	height: 488px;
	background-color: $white;
}
.content-text {
	max-width: 559px;
}

h2 {
	font-weight: 200;
	font-size: 25px;
	line-height: 138.69%;

	/* identical to box height, or 49px */
	text-align: center;
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: $black;
	span {
		font-weight: 700;
	}
}

p {
	font-weight: 300;
	font-size: 15px;

	line-height: 27px;
	text-align: center;

	color: #000000;
}

@media screen and (min-width: $sm) {
	.box-content {
		height: 636px;
	}
	h2 {
		font-size: 35px;
	}
	p {
		font-size: 23px;
	}
}
@media screen and (min-width: $md) {
	.box-content {
		height: 636px;
	}
}
</style>

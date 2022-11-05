<template>
	<div class="pa-0 box-float order-1 order-sm-0">
		<div
			class="card-services px-6 px-md-16 py-8 py-md-0 d-flex align-center"
		>
			<v-row>
				<v-col
					cols="12"
					md="6"
					class="mb-4"
					v-for="(item, index) in items"
					:key="index"
				>
					<div class="icon mb-6">
						<img
							:src="
								require(`../assets/imgs/home/${item.icon}.svg`)
							"
							:alt="item.title"
						/>
					</div>
					<h3>{{ item.title }}</h3>
					<p class="my-4">{{ item.text }}</p>
					<v-btn to="/" depressed
						>Saber más <v-icon right>mdi-arrow-right</v-icon></v-btn
					>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					title: 'FLETES NACIONALES CON UNIDAD DEDICADA',
					text: 'Transporte terrestre por toda la república mexicana.',
					to: '',
					icon: 'icono-servicio1',
				},
				{
					id: 2,
					title: 'FLETES LOCALES CON UNIDAD DEDICADA',
					text: 'Transporte terrestre dentro de León Guanajuato.',
					to: '',
					icon: 'icono-servicio1',
				},
				{
					id: 3,
					title: 'Rutas secuenciadas',
					text: 'Transporte coordinado sin interrupción de planta a planta 24/7, para suministro de material.',
					to: '',
					icon: 'icono-servicio2',
				},
				{
					id: 4,
					title: 'Resguardo y almacenaje',
					text: 'Resguardamos tu carga y la entregamos en fecha y hora solicitada.',
					to: '',
					icon: 'icono-servicio3',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.box-float {
	position: absolute;
	top: 200px;
	right: 0;
	left: 0;
	margin: 0 auto;
	width: 96%;
	max-width: 375px;
}
.card-services {
	height: auto;
	background: #58595b;
}

h3 {
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: #ffffff;
}

p {
	font-weight: 300;
	font-size: 20px;
	line-height: 156.69%;

	/* or 31px */
	letter-spacing: 0.025em;

	color: #ffffff;
}

a {
	font-weight: 700 !important;
	font-size: 18px !important;
	line-height: 21px !important;

	/* identical to box height */
	letter-spacing: 0.025em !important;

	color: #4aa65a !important;
	text-transform: initial !important;
	text-decoration: underline !important;
	background-color: transparent !important;
}

.icon {
	height: 53px;
	width: 53px;
	display: block;
	// margin: 0 auto;
	img {
		height: 100%;
		width: 100%;
	}
}

@media screen and (min-width: $md) {
	.box-float {
		max-width: 881px;
	}
}
@media screen and (min-width: $lg) {
	.card-services {
		width: 881px;
		height: 643px;
	}
	.box-float {
		// position: absolute;
		bottom: auto;
		top: auto;
		transform: translate(75%); /* Equivalente a translateX(10px) */
		// right: 10px;
		// left: auto;
		top: calc(35%);
	}
}
</style>

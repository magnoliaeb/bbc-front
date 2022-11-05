<template>
	<section class="py-12">
		<div class="content">
			<v-row>
				<v-col cols="12">
					<h2>
						<s>01 </s>
						<span class="">/</span> Nuestros valores
					</h2>
				</v-col>
			</v-row>
			<v-row class="justify-start justify-lg-center mt-10">
				<v-col
					cols="6"
					md="4"
					lg="4"
					xl="2"
					v-for="(value, index) in items"
					:key="index"
				>
					<div class="text-center">
						<div class="icon mb-6">
							<img
								:src="
									require(`../assets/imgs/nosotros/${value.icon}.png`)
								"
								:alt="value.title"
							/>
						</div>
						<h3 class="mb-4">{{ value.title }}</h3>
						<p>{{ value.text }}</p>
					</div>
				</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					title: 'Disponibilidad',
					text: 'Apasionados por el transporte siempre encontraremos una solución dando una pronta respuesta a tu servicio con atención personalizada 24/7.',
					icon: 'icono1',
				},
				{
					id: 2,
					title: 'Excelencia',
					text: 'Llevamos la calidad del servicio a su máximo nivel, logrando la satisfacción de nuestros clientes.',
					icon: 'icono2',
				},
				{
					id: 3,
					title: 'Lealtad',
					text: 'Fidelidad con nuestros clientes y con el entorno de nuestra organización, en dirección a un desarrollo común.',
					icon: 'icono3',
				},
				{
					id: 4,
					title: 'Puntualidad',
					text: 'Entendemos la importancia del tiempo; por lo cual tu mercancía se recolectará y/o entregará en los periodos establecidos.',
					icon: 'icono4',
				},
				{
					id: 5,
					title: 'Responsabilidad',
					text: 'Es el estandarte de la empresa, en la cual nos basamos para ejecutar nuestros servicios.',
					icon: 'icono5',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
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

.icon {
	height: 53px;
	width: 53px;
	display: block;
	margin: 0 auto;
	img {
		height: 100%;
		width: 100%;
	}
}

h3 {
	font-weight: 700;
	font-size: 14px;
	line-height: 12px;

	/* identical to box height */
	letter-spacing: 0.025em;

	color: #000000;
}

p {
	font-weight: 300;
	font-size: 16px;
	line-height: 174.69%;

	/* or 28px */
	text-align: center;
	letter-spacing: 0.025em;

	color: #000000;
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 35px;
	}

	.icon {
		height: 88px;
		width: 88px;
	}

	h3 {
		font-size: 18px;
	}

	p {
		font-size: 16px;
	}
}
</style>

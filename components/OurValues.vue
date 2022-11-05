<template>
	<section class="py-12">
		<div class="content">
			<v-row>
				<v-col cols="12">
					<h2>Nuestros <span>Valores</span></h2>
				</v-col>
			</v-row>
			<v-row class="justify-start justify-md-center mt-10">
				<v-col
					cols="6"
					sm="4"
					md="2"
					v-for="(value, index) in items"
					:key="index"
					class="mb-4"
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
						<h3>{{ value.title }}</h3>
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
				{ id: 1, title: 'Disponibilidad', icon: 'icono1' },
				{ id: 2, title: 'Excelencia', icon: 'icono2' },
				{ id: 3, title: 'Lealtad', icon: 'icono3' },
				{ id: 4, title: 'Puntualidad', icon: 'icono4' },
				{ id: 5, title: 'Responsabilidad', icon: 'icono5' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
section {
	border-bottom: 6px solid $primary;
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

.icon {
	height: 72px;
	width: 72px;
	display: block;
	margin: 0 auto;
	img {
		height: 100%;
		width: 100%;
	}
}

h3 {
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;

	/* identical to box height */
	letter-spacing: 0.025em;

	color: $black;
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 35px;
	}
}
</style>

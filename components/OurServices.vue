<template>
	<div class="content py-6 pb-0 py-md-10 service">
		<v-row class="mt-6 mt-md-10">
			<v-col cols="12" class="">
				<v-tabs
					:height="$vuetify.breakpoint.smAndDown ? '70px' : '60px'"
					dark
					grow
					background-color="transparent"
					color="##C4C4C4"
				>
					<v-tab
						:ripple="false"
						:href="`#${item.id}`"
						v-for="(item, index) in items"
						:key="index"
					>
						<div
							class="
								mb-3
								d-flex
								flex-column flex-md-row
								align-center
							"
						>
							<!-- <h3 class="mr-2 order-1 order-md-0">
								{{ item.title }}
							</h3> -->

							<img
								class="order-0"
								:src="
									require(`../assets/imgs/servicios/${item.icon}.png`)
								"
								:alt="item.title"
							/>
						</div>
					</v-tab>

					<v-tab-item
						:href="`#${item.id}`"
						v-for="(item, index) in items"
						:key="index"
						:value="item.id"
					>
						<ServiceItem :service="item.service" />
					</v-tab-item>
				</v-tabs>
			</v-col>
		</v-row>
	</div>
</template>

<script>
// import ServiceItem from './ServiceItem.vue';
export default {
	// components: { ServiceItem },
	data() {
		return {
			items: [
				{
					id: 'fletes-nacionales',
					title: 'Fletes locales con <span>Unidad dedicada</span>',
					text: 'Transporte terrestre dentro de León Guanajuato.',
					icon: 'mapa',
				},

				{
					id: 'fletes-locales',
					title: 'Fletes locales con <span>Unidad dedicada</span>',
					text: 'Transporte terrestre dentro de León Guanajuato.',
					icon: 'jalisco',
				},

				{
					id: 'rutas-secundarias',
					title: 'Rutas secuenciadas <span>de suministro de material</span>',
					text: 'transporte coordinado sin interrupción de planta a planta 24/7, para suministro de material.',
					icon: 'rutas-secuenciadas',
				},

				{
					id: 'resguardo-y-almacen',
					title: 'Resguardo y almacenaje <span>de Mercancía</span>',
					icon: 'almacen',
				},

				{
					id: 'servicio-consolidado',
					title: 'Diseño Digital',
					icon: 'rutas-lsq',
				},
				{
					id: 'renta-de-remolques',
					title: 'Diseño Digital',
					icon: 'remolque',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 800;
	font-size: 20px;
	text-transform: uppercase;
	color: #2d2d2d;
}
p {
	font-size: 12px;
	line-height: 31px;
	text-align: center;
	color: #2d2d2d;
}
h3 {
	font-weight: 500;
	font-size: 10px;
	text-align: center;
	color: rgba(82, 83, 83, 0.5);
	text-transform: initial;
}
img {
	height: 30px;
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 30px;
	}
	p {
		font-size: 18px;
	}
	h3 {
		font-size: 14px;
	}
	img {
		height: 35px;
	}
}

@media screen and (min-width: $lg) {
	h3 {
		font-size: 14px;
	}
}
@media screen and (min-width: $xl) {
	h3 {
		font-size: 18px;
	}
}
</style>

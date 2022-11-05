<template>
	<div>
		<BannerIntro
			:title="'nuestras unidades'"
			:path="'unidades'"
			:bg="'banner'"
			:bgSm="'banner'"
		/>
		<div class="content my-10">
			<v-row
				class="align-center justify-space-around"
				v-for="(item, index) in items"
				:key="index"
			>
				<v-col
					cols="12"
					md="4"
					lg="5"
					class="my-md-16 py-md-16 d-flex justify-center"
				>
					<img
						:alt="item.title"
						:src="require(`@/assets/imgs/unidades/${item.img}.png`)"
					/>
				</v-col>
				<v-col cols="12" md="auto" class="text-center py-10 py-md-0">
					<h3 v-html="item.title" class="mb-6"></h3>
					<div class="d-flex align-center mb-3 justify-center">
						<img
							class="icon mr-3"
							src="../assets/imgs/unidades/icono-medida.png"
							alt="medida"
						/>
						<h4>{{ item.box }}</h4>
					</div>
					<p class="mb-2">Largo: {{ item.length }}</p>
					<p class="mb-2">Ancho: {{ item.width }}</p>
					<p class="mb-2">Alto: {{ item.height }}</p>
					<div class="mt-8">
						<v-btn
							rounded
							depressed
							color="primary"
							:to="{ name: 'contacto' }"
							>Contáctnos</v-btn
						>
					</div>
				</v-col>
				<v-col cols="12" v-if="item.id < 5" class="py-10 py-md-0">
					<v-divider style="background-color: #4aa65a"></v-divider>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import BannerIntro from '../components/BannerIntro.vue';
export default {
	components: { BannerIntro },
	head: {
		title: 'Nuestras unidades',
	},
	data() {
		return {
			items: [
				{
					id: 1,
					title: 'unidad <span>1 ton</span>',
					length: '2.34 m',
					width: '1.70 m',
					height: '1.85 m',
					box: 'Caja',
					img: 'unidad-1-ton',
					right: false,
					left: true,
				},
				{
					id: 2,
					title: 'unidad <span>3.5 ton</span>',
					length: '4.40 m',
					width: '2.10 m',
					height: '2.a m',
					box: 'Caja',
					img: 'unidad-3-5-ton',
					right: true,
					left: false,
				},
				{
					id: 3,
					title: 'unidad <span>rabón</span>',
					length: '5.40m - 7.7m',
					width: '2.40m',
					height: '2.20m',
					box: 'Caja',
					img: 'unidad-rabon',
					right: true,
					left: false,
				},
				{
					id: 4,
					title: 'unidad <span>torton</span>',
					length: '8 m - 10 m',
					width: '2.40 m',
					height: '2.30 m',
					box: 'Caja',
					img: 'unidad-torton',
					right: false,
					left: true,
				},
				{
					id: 5,
					title: 'unidad <span>trailer</span>',
					length: '16.15 m',
					width: '2.50 m',
					height: '2.60 m',
					box: 'Caja 53 pies',
					img: 'unidad-trailer',
					right: true,
					left: false,
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.icon {
	height: 26px;
	width: 26px;
}

img {
	width: 100%;
	height: auto;
	max-width: 345px;
	max-height: 290px;
}

::v-deep h3 {
	font-weight: 200;
	font-size: 25px;
	line-height: 138.69%;

	/* identical to box height, or 49px */
	text-align: center;
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: #000000;
	span {
		font-weight: 700;
	}
}

h4 {
	font-weight: 700;
	font-size: 18px;
	line-height: 29px;
	text-align: center;
	letter-spacing: 0.025em;

	color: #000000;
}

p {
	font-weight: 300;
	font-size: 15px;
	line-height: 174.69%;

	/* or 31px */
	letter-spacing: 0.025em;

	color: #000000;
}
a {
	// width: 199px;
	height: 49px !important;

	background: $primary !important;
	border-radius: 59px !important;
	font-weight: 700 !important;
	font-size: 19px !important;
	line-height: 22px !important;
	letter-spacing: 0.025em !important;

	color: #ffffff !important;
	text-transform: initial !important;
	width: 199px !important;
}

@media screen and (min-width: $md) {
	img {
		width: 100%;
		max-width: 619px;
		height: auto;
		max-height: 543px;
	}
	::v-deep h3 {
		font-size: 35px;
	}
	h4 {
		font-size: 25px;
	}

	p {
		font-size: 18px;
	}
}
</style>

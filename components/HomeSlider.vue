<template>
	<div class="home">
		<client-only>
			<VueSlickCarousel v-bind="slickOptions" :dots="true">
				<div
					class="bg-img"
					:class="`bg-${slide.bg}`"
					v-for="(slide, index) in slides"
					:key="index"
				>
					<img
						class="img-banner"
						width="100%"
						height="100%"
						:src="require(`@/assets/imgs/home/${slide.bg}.jpg`)"
						:alt="slide.title"
					/>

					<div class="content fill-height" style="z-index: 200">
						<v-row
							class="
								align-end
								fill-height
								align-md-center
								pb-16 pb-md-0
								justify-center justify-md-start
							"
						>
							<v-col
								cols="12"
								sm="10"
								md="8"
								lg="6"
								xl="5"
								class="text-center text-md-left"
							>
								<h2 class="" v-html="slide.title"></h2>
								<p class="mt-6 mb-10">{{ slide.text }}</p>
								<v-btn
									:to="slide.btnTo"
									depressed
									class=""
									rounded
									>{{ slide.btnTitle }}</v-btn
								>
							</v-col>
						</v-row>
					</div>
				</div>
				<template #prevArrow>
					<div class="custom-arrow" style="height: 25px; width: 25px">
						<svg
							style="height: 100%; width: 100%; color: #c4c4c4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="{2}"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</div>
				</template>
				<template #nextArrow>
					<div class="custom-arrow" style="height: 25px; width: 25px">
						<svg
							style="height: 100%; width: 100%; color: #c4c4c4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="{2}"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</template>
			</VueSlickCarousel>
		</client-only>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slickOptions: {
				dots: true,
				arrows: true,
				infinite: true,
				slidesToShow: 1,
				initialSlide: 0,
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,
				responsive: [],
			},
			slides: [
				{
					title: 'confianza en <br/> <span> movimiento </span>',
					text: 'Cuidamos tu mercancía como si fuera nuestra, brindando un servicio de la más alta calidad.',
					btnTitle: 'Contáctanos',
					btnTo: '/contacto',
					bg: 'banner',
				},
				{
					title: 'confianza en <br/> <span> movimiento </span>',
					text: 'Cuidamos tu mercancía como si fuera nuestra, brindando un servicio de la más alta calidad.',
					btnTitle: 'Contáctanos',
					btnTo: '/contacto',
					bg: 'banner',
				},
				{
					title: 'confianza en <br/> <span> movimiento </span>',
					text: 'Cuidamos tu mercancía como si fuera nuestra, brindando un servicio de la más alta calidad.',
					btnTitle: 'Contáctanos',
					btnTo: '/contacto',
					bg: 'banner',
				},
				{
					title: 'confianza en <br/> <span> movimiento </span>',
					text: 'Cuidamos tu mercancía como si fuera nuestra, brindando un servicio de la más alta calidad.',
					btnTitle: 'Contáctanos',
					btnTo: '/contacto',
					bg: 'banner',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.img-banner {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	object-fit: cover;
	pointer-events: none !important;
	z-index: -100;
	width: 100%;
	height: 100%;
	background-color: $gray;
}
.home {
	height: 90vh;
}
.slick-slider {
	display: block !important;
	// background-color: red;
}
.bg-img {
	height: 90vh;
	background-size: cover;
	// object-fit: contain;
	object-position: right;
	position: relative;
}

::v-deep h2 {
	font-weight: 300;
	font-size: 35px;
	line-height: 138.69%;

	/* or 69px */
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: $white;
	span {
		font-weight: 700;
	}
}
p {
	font-weight: 300;
	font-size: 18px;
	line-height: 29px;
	letter-spacing: 0.025em;

	color: $white;
}

a {
	background: $white !important;
	border-radius: 47px !important;
	width: 234px !important;
	height: 58px !important;
	font-weight: 700 !important;
	font-size: 19px !important;
	line-height: 22px !important;
	letter-spacing: 0.025em !important;

	color: $primary !important;
	text-transform: initial !important;
}

@media screen and (min-width: $sm) {
	::v-deep h2 {
		font-size: 50px;
	}
	p {
		font-size: 25px;
	}
}
@media screen and (min-width: $md) {
	.home {
		height: 80vh;
	}

	.bg-img {
		height: 80vh;
	}
}
@media screen and (min-width: $lg) {
	.home {
		height: 100vh;
	}
	.bg-img {
		height: 100vh;
	}
}
</style>

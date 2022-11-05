<template>
	<section class="d-flex align-center justify-center py-16 units-slider">
		<div class="content">
			<v-row class="mb-10 mb-md-16">
				<v-col cols="12" class="text-center">
					<h2>
						<s>04 </s>
						<span class="">/</span> Nuestras unidades
					</h2>
				</v-col>
			</v-row>

			<client-only>
				<VueSlickCarousel v-bind="slickOptions">
					<div
						class="px-2"
						v-for="(item, index) in items"
						:key="index"
					>
						<article
							class="
								pb-6
								card-unit
								text-center
								d-flex
								justify-center
								align-end
							"
						>
							<div class="">
								<div class="icon mb-6">
									<img
										width="100%"
										height="200px"
										:src="
											require(`@/assets/imgs/home/${item.img}.png`)
										"
										:alt="item.title"
									/>
								</div>
								<p v-html="item.title"></p>
							</div>
						</article>
					</div>

					<template #prevArrow>
						<div class="custom-arrow">
							<svg
								style="color: #fff"
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
						<div class="custom-arrow">
							<svg
								style="color: #fff"
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
	</section>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					title: 'unidad <span>1 ton</span>',
					img: 'unidad-1-ton',
				},
				{
					id: 2,
					title: 'unidad <span>3.5 ton</span>',
					img: 'unidad-3-5-ton',
				},
				{
					id: 3,
					title: 'unidad <span>rabón</span>',
					img: 'unidad-rabon',
				},
				{
					id: 4,
					title: 'unidad <span>torton</span>',
					img: 'unidad-torton',
				},
				{
					id: 5,
					title: 'unidad <span>trailer</span>',
					img: 'unidad-trailer',
				},
			],
			slickOptions: {
				dots: false,
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 0,
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,
				centerMode: true,
				centerPadding: '10px',
				variableWidth: true,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 863,
						settings: {
							arrows: true,
						},
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped>
section {
	// background-color: orange;
	background-color: $gray;
	background-image: url('../assets/imgs/home/banner3.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	// height: 512px;
	height: 618px;
}
h2 {
	font-size: 25px;
	line-height: 138.69%;

	/* identical to box height, or 49px */
	letter-spacing: 0.025em;
	text-transform: uppercase;
	text-align: center;

	color: $white;
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

.card-unit {
	width: 268px;
	// max-width: 268px;
	height: 268px;
	background: $white;
	border-radius: 12px;
}
::v-deep p {
	font-weight: 300;
	font-size: 25px;
	line-height: 29px;
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: $black;
	span {
		font-weight: 700;
		color: $primary;
	}
}

.icon {
	height: 180px;
	width: 180px;
	display: block;
	margin: 0 auto;
	// background-color: orange;
	img {
		height: 100%;
		width: 100%;
	}
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 35px;
	}

	// p {
	// 	font-size: 16px;
	// }
}
@media screen and (min-width: $md) {
	section {
		// background-image: url('../assets/imgs/home/banner3.jpg');

		height: 618px;
	}
}
</style>

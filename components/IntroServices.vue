<template>
	<section class="py-8">
		<v-row class="fill-height" no-gutters>
			<v-col
				cols="12"
				sm="12"
				md="12"
				lg="6"
				class="pa-md-0 box-content fill-height"
			>
				<v-row
					class="justify-center align-center fill-height text-center"
				>
					<v-col cols="12" class="fill-height pa-0">
						<div class="card-about fill-height">
							<div
								class="
									align-start
									content
									fill-height
									d-flex
									align-lg-center
									justify-center
								"
							>
								<h2 class="my-8">
									<span>02 /</span> Nosotros <br />
									servicios
								</h2>
							</div>
						</div>
					</v-col>
				</v-row>
				<CardService />
			</v-col>
		</v-row>
	</section>
</template>

<script>
import CardService from './CardService.vue';
export default {
	components: { CardService },
};
</script>

<style lang="scss" scoped>
section {
	// border: 1px solid red;
	height: 1700px;
	// background-color: orange;
	display: flex;
	align-items: center;
	background-color: $white;
}
img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
.box-content {
	// background-color: yellow;
	// border: 2px solid green;
	width: 100%;
	height: 293px;
	position: relative;
	// max-width: 864px;
}

.card-about {
	background-color: $gray;
	background-image: url('../assets/imgs/home/img1.jpg');
	background-size: cover;
	background-repeat: no-repeat;
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

@media screen and (min-width: $sm) {
	section {
		height: 1560px;
	}
}
@media screen and (min-width: $md) {
	section {
		height: 860px;
	}
}
@media screen and (min-width: $lg) {
	section {
		height: 864px;
	}
	// .box-content {
	// 	max-width: 864px;
	// 	// display: flex;
	// }
	.card-about {
		height: 800px;
	}
	h2 {
		font-size: 35px;
	}
}
</style>

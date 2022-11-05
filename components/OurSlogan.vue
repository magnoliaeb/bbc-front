<template>
	<section class="py-10 mb-2">
		<div class="content">
			<v-row class="justify-center">
				<v-col cols="11" md="12">
					<h2>Trabajamos en mejorar <span>cada día para ti</span></h2>
				</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
	background: linear-gradient(90deg, #4aa65a 0%, #1c4122 100%);
}
h2 {
	font-weight: 200;
	font-size: 27.8px;
	line-height: 138.69%;
	/* identical to box height, or 49px */

	text-align: center;
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: #ffffff;
	span {
		font-weight: 700;
	}
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 35px;
	}
}
</style>

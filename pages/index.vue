<template>
	<div>
		<HomeSlider />
		<IntroOurValues />
		<IntroAbout />
		<IntroServices />
		<OurUnits />
	</div>
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue';
import IntroAbout from '../components/introAbout.vue';
import IntroOurValues from '../components/IntroOurValues.vue';
import IntroServices from '../components/IntroServices.vue';
import OurUnits from '../components/OurUnits.vue';
export default {
	components: {
		OurUnits,
		IntroOurValues,
		IntroAbout,
		HomeSlider,
		IntroServices,
	},
	head: {
		title: 'Inicio',
	},
};
</script>

<style lang="scss" scoped></style>

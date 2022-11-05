<template>
	<div>
		<AboutIntro />
		<OurValues />
		<AboutGrid />
		<OurSlogan />
	</div>
</template>

<script>
import AboutGrid from '../components/AboutGrid.vue';
import AboutIntro from '../components/AboutIntro.vue';
import OurSlogan from '../components/OurSlogan.vue';
import OurValues from '../components/OurValues.vue';
export default {
	components: { OurValues, OurSlogan, AboutIntro, AboutGrid },
	head: {
		title: 'Nosotros',
	},
};
</script>

<style lang="scss" scoped></style>
